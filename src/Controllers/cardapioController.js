const Cardapio = require('../models/CardapioModel')

exports.info = (req, res) => {
    res.render('tela3')
};

exports.criarCardapio = (req, res) => {
    const cardapio = new Cardapio(req.body);
     cardapio.criarCardapio()
    res.render("criarCardapio");
}