const express = require('express');
const route = express.Router();

// IMPORTAÇÕES DE ROTAS
const paginaInicial = require('./src/Controllers/homeController');
const login = require('./src/Controllers/loginController')

// ROTAS PAGINA INICIAL
route.get("/", paginaInicial.paginaInicial);
route.get("/cardapio", paginaInicial.cardapios );
route.get("/login", paginaInicial.login);

// ROTAS LOGIN
route.get("/ferramentas", login.ferramentas );

// ROTAS FERRAMENTAS
route.get("/editarCardapio", login.editarCardapio );
route.get("/frequencia", login.quantidadeDeAlunos)

module.exports = route;