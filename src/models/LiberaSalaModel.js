const mongoose = require('mongoose');

const LiberaScheema = new mongoose.Schema({
    sala: { type: String, required: true },
    status: { type: String, required: true }
});

const LiberaModel = mongoose.model('Libera sala', LiberaScheema);

class Libera {
    constructor(body) {
        this.body = body;
        this.libera = null;
        this.errors = [];
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            sala: this.body.sala,
            status: this.body.status
        }
    }

    async atualizaStatus ( id, status ) {
        try{   
            if(typeof id != 'string') return; 
            this.cleanUp();
            this.body.status = this.mudaStatus();
            this.libera = await LiberaModel.findByIdAndUpdate(id, this.body, {new: true});
            return this.libera
            
        }catch(e){console.log(e)}
    }

    async buscaSala(){
        const salas = await LiberaModel.find();
        return salas
    }

    // STATICALS METHODS
    mudaStatus(){
        if(this.body.status === "Liberada"){
            return this.body.status = "P/liberar"
        }else{
            return this.body.status = "Liberada"
        }
    }
}

module.exports = Libera;