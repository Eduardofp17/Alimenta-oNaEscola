const Login = require('../models/LoginModel');


exports.ferramentas = async (req, res)=> {
    const login = new Login(req.body);
    const cargo = await login.buscaCargo(req.params.id);
    console.log(cargo)
    res.render('tela4');
}

exports.editarCardapio = (req, res) => {
    res.render('tela5')
}

exports.quantidadeDeAlunos = (req, res) => {
    res.render('tela6')
}