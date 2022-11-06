const mongoose = require('mongoose');

const CardapioSchema = new mongoose.Schema({
    dia: { type: String, required: true },
    manha: { type: String, required: true },
    almoco: {type: String ,required: true},
    tarde: {type: String, required: true},
    semanas: {type: String, required: true}
  });
  
  const CardapioModel = mongoose.model('Cardapio', CardapioSchema);

  class Cardapio {
    constructor(body) {
        this.body = body;
        this.cardapio = null;
        this.errors = []
      }
      async criarCardapio() {
        try{
            for(const key in this.body) {
                if(typeof this.body[key] !== 'string') {
                    this.body[key] = '';
                  }
              }
    
              this.body = {
                  dia: this.body.diaDoCardapio,
                  manha: this.body.manha,
                  almoco: this.body.almoco,
                  tarde: this.body.tarde,
                  semanas: this.body.semanas
              };
              this.cardapio = await CardapioModel.create(this.body);
           
        }catch(e){console.log(e)}
      }
      async buscaCardapio  (semanas) {
        const cardapios = await CardapioModel.find({semanas: semanas})
        return cardapios;
    }

    async buscaPorID (id) {
      if(typeof id != 'string') return;
      const cardapio = await CardapioModel.findById(id);
      return cardapio;
  }
    async editaCardapio(id) {
       if(typeof id != 'string') return;
     
   
      if(this.errors.length > 0) return;
      
      this.cardapio = await CardapioModel.findByIdAndUpdate(id, this.body, {new: true});
    }
  }

  module.exports = Cardapio;