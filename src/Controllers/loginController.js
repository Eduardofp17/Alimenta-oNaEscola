const Login = require('../models/LoginModel');


exports.ferramentas = async (req, res)=> {
    const login = new Login(req.body);
    const cargo = await login.buscaCargo(req.params.id);
    res.render('tela4');
}

exports.quantidadeDeAlunos = (req, res) => {
    res.render('tela6')
}