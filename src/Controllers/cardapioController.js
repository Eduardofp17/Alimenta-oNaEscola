const Cardapio = require('../models/CardapioModel');
const semana = require('../../public/assets/js/index');
const Login = require('../models/LoginModel');

exports.info = (req, res) => {
    res.render('tela3')
};

exports.criarCardapio = (req, res) => {
    const cardapio = new Cardapio(req.body);
     cardapio.criarCardapio()
    res.render("criarCardapio");
}
exports.editarCardapioIndex = async (req, res) => {
    const cardapio = new Cardapio(req.body);
    const semanas = semana.semana;
    const cardapios = await cardapio.buscaCardapio(semanas);
    const login = new Login(req.body).user
    res.render("tela5", {cardapios, semanas, login});
    return;
}
exports.editarCardapio = async (req, res) => {
    const cardapio = new Cardapio(req.body);
    const semanas = semana.semana;
    if(!req.params.id) return res.send("ERROR");
    const cardapios = await cardapio.buscaPorID(req.params.id);
    const login = new Login(req.body).user
    res.render('editaCardapio', {cardapios, semanas, login})
}
exports.editar = async (req, res) => {
    try{
        if(!req.params.id) return res.send("ERROR");
        const cardapio = new Cardapio(req.body);
         await cardapio.editaCardapio(req.params.id);
        if(cardapio.errors.length > 0){
            req.flash('errors', cardapio.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('success', 'Cardapio editado com sucesso');
        req.session.save(() => res.redirect(`/editarCardapio`));
        return;
    }catch(e) {console.log(e)}
}
exports.feedback = async (req, res) => {
    res.render('feedback')
}