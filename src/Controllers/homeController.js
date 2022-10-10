exports.paginaInicial = (req, res) =>{ 
    res.render('index')
};
exports.cardapios = (req, res) => {
    res.render("tela2")
};
exports.login = (req, res) => {
    res.render("login")
}