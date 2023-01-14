const Frequencia = require('../models/FrequenciaModel');
const Login = require('../models/LoginModel');
const LiberaSala = require('../models/LiberaSalaModel');

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
    res.render('tela6', {frequencias, total, ultimoAtualizado});
}

exports.salasLiberadas = async (req, res) => {
   const login = new Login(req.body);
   const cargo = await login.buscaCargo(req.params.id);
   const salasLiberadas = new LiberaSala(req.body);
   const salas = await salasLiberadas.buscaSala ();
   
   res.render("salasLiberadas", { salas, cargo}    );
}

exports.liberaSala = async (req, res) => {
    const libera = new LiberaSala(req.body);
    await libera.atualizaStatus(req.body.id)
    req.flash('success', "Status atualizado com sucesso");
    req.session.save(()=> {
        res.redirect('back')
    })
}