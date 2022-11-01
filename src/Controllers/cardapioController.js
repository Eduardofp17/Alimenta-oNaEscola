const Cardapio = require('../models/CardapioModel')
const Semanas = require('../../public/assets/js/index')
exports.info = (req, res) => {
    res.render('tela3')
};

exports.criarCardapio = (req, res) => {
    const cardapio = new Cardapio(req.body);
     cardapio.criarCardapio()
    res.render("criarCardapio");
}
exports.editarCardapio = async (req, res) => {
    const cardapio = new Cardapio(req.body);
    const semanas =new Semanas().pegarDataAtual();
    const cardapios = await cardapio.buscaCardapio(semanas);
    
    res.render("tela5", {cardapios, semanas});
    return;
}