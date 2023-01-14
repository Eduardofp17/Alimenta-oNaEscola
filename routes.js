const express = require('express');
const route = express.Router();

// IMPORTAÇÕES DE ROTAS
const paginaInicial = require('./src/Controllers/homeController');
const login = require('./src/Controllers/loginController');
const cardapio = require('./src/Controllers/cardapioController');
const frequencia = require('./src/Controllers/frequenciaController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const {middlewareGlobal, loginRequired} = require('./src/middlewares/middleware');

// ROTAS PAGINA INICIAL
route.get("/", urlencodedParser,  middlewareGlobal,paginaInicial.paginaInicial);
route.get("/cardapio", paginaInicial.cardapios );

// Fazer login
route.get("/login", paginaInicial.loginIndex);
route.post("/login/login", urlencodedParser, paginaInicial.login)
route.get("/login/criarConta", loginRequired,urlencodedParser , paginaInicial.registerIndex );
route.post("/login/criarConta", loginRequired ,urlencodedParser ,middlewareGlobal ,paginaInicial.register);
route.get("/login/logout", paginaInicial.logout);
// ROTAS LOGIN
route.get("/ferramentas/:id", loginRequired ,urlencodedParser, middlewareGlobal ,login.ferramentas );

// ROTAS FERRAMENTAS
route.get("/editarCardapio", urlencodedParser, middlewareGlobal , cardapio.editarCardapioIndex);
route.get("/editarCardapio/editar/:id", urlencodedParser, middlewareGlobal, cardapio.editarCardapio);
route.post("/editarCardapio/editar/:id", urlencodedParser, middlewareGlobal, cardapio.editar);
route.get("/frequencia", login.quantidadeDeAlunos);
route.get("/ferramentas/:id/salasLiberadas", urlencodedParser, middlewareGlobal, login.salasLiberadas );

route.post("/ferramentas/:id/salasLiberadas/:id", urlencodedParser, middlewareGlobal, login.liberaSala);
// ROTAS CARDÁPIO
// route.get("/criarCardapio", urlencodedParser ,cardapio.criarCardapio );
// route.post("/criarCardapio",  urlencodedParser ,cardapio.criarCardapio )
route.get("/valorNutricional", cardapio.info );
route.get("/cardapio/feedback",middlewareGlobal, cardapio.feedback );

// ROTAS FREQUÊNCIA
route.get("/frequencia/AddFrequencia/:id", urlencodedParser, middlewareGlobal, frequencia.AddFrequenciaIndex )
route.post("/frequencia/AdicionarFrequencia/add/:id", urlencodedParser, middlewareGlobal, frequencia.AdicionaFrequencia)

module.exports = route;