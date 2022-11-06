const Frequencia = require('../models/FrequenciaModel');
const Login = require('../models/LoginModel');

exports.ferramentas = async (req, res)=> {
    const login = new Login(req.body);
    const cargo = await login.buscaCargo(req.params.id);
    res.render('tela4');
}

exports.quantidadeDeAlunos = async (req, res) => {
    const frequencia = new Frequencia(req.body);
    const frequencias =  await frequencia.buscaFrequencia();
    const total = frequencias[1].total;
    const ultimoAtualizado = await (await frequencia.ultimoAtualizado());
    res.render('tela6', {frequencias, total, ultimoAtualizado})
}

exports.salasLiberadas = (req, res) => {
   res.send("Fui criado")
}