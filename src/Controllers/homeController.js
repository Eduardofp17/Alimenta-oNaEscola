const Login = require('../models/LoginModel');
const Cardapio = require('../models/CardapioModel');
const Semanas = require('../../public/assets/js/index');
exports.paginaInicial = (req, res) =>{ 
    res.render('index');
    return;
};
exports.cardapios = async (req, res) => {
    const cardapio = new Cardapio(req.body);
    const semanas =new Semanas().pegarDataAtual();
    const cardapios = await cardapio.buscaCardapio(semanas);
    
    res.render("tela2", {cardapios, semanas});
    return;
};
exports.loginIndex = async (req, res) => {
    if(req.session.user) return res.redirect(`/ferramentas/${req.session.user._id}`);
    res.render("login");
    return;
};

exports.registerIndex = async (req, res) => {
    res.render('create')
}
exports.register = async (req, res) =>{
    try{
        const login = new Login(req.body);   
       await login.register();

       if(login.errors.length > 0){
        req.flash('errors', login.errors);
        req.session.save( () => {
            return res.redirect('back');
        })
        return;
    }
    req.flash('success', 'Conta criada com sucesso');
    req.session.save( ()=>{
        return res.redirect('back');
    });
    } catch(e){
        console.log(e)
    }    
}       
exports.login = async (req, res)=> {
    const login = new Login(req.body);
    try{
        await login.login();
        
       if(login.errors.length > 0){
        req.flash('errors', login.errors);
        req.session.save( () => {
            return res.redirect('back');
        })
        return
    }
        req.flash('success', 'Você foi logado');
        req.session.user = login.user;
        req.session.save( () => {
            return res.redirect(`/ferramentas/${login.user._id}`);            
        })
    } catch(e){
        console.log(e)
    }
}

exports.logout = (req, res)=>{
    req.session.destroy();
    res.redirect("/login")
}