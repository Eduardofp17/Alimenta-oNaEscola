const mongoose = require('mongoose');
const moments = require('moment');
const tz = require('moment-timezone')


const FrequenciaSchema = new mongoose.Schema({
    sala: { type: String, required: true },
    alunos: {type: Number, required: true},
    atualizadoEm: {type: String}
  });

const FrequenciaModel = mongoose.model('Frequencia', FrequenciaSchema);

class Frequencia {
    constructor(body){
        this.body = body;
        this.frequencia = null;
        this.errors = [];
    }

    cleanUp(){
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
              }
          }
          this.body = {
              sala: this.body.sala,
              alunos: this.body.QTDalunos,
              atualizadoEm: moments().tz('America/Sao_Paulo').format("DD/MM HH:mm")
          };
    }
     async adicionaFrequencia(){
        try{
            this.cleanUp()
              this.frequencia = await FrequenciaModel.create(this.body);

        }catch(e){console.log(e)}
    }
    async buscaFrequencia  () {
        const frequencias = await FrequenciaModel.find()
       

        this.total = (frequencias.map(frequencia => {
            return frequencia.alunos
        }))
       var total = this.total.reduce((soma, i) => {
        return soma + i
       })
     
        return frequencias.map((frequencia)=>{
            return{
                id: frequencia._id,
                sala: frequencia.sala,
                alunos: frequencia.alunos,
                atualizadoEm: frequencia.atualizadoEm,
                total: total
            }
            
            
        })
    }
    async ultimoAtualizado () {
        
        const ultimoAtualizado = await FrequenciaModel.find().sort({atualizadoEm: -1});
        const ultimaData = ultimoAtualizado[0].atualizadoEm
        return ultimaData;
    }
    async buscaPorID (id) {
        if(this.errors.length > 0) return;
        const frequencia = await FrequenciaModel.findById(id);
        return frequencia;
    }
    async atualizaFrequencia (id) {
        if(typeof id != 'string') return;
        this.cleanUp()
     
        this.frequencia = await FrequenciaModel.findByIdAndUpdate(id , this.body, {new: true});
       
        return this.frequencia;
    }
    
}

module.exports = Frequencia;