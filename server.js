//importando connection string
require('dotenv').config();

//IMPORTAÇÕES
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const mongoose = require('mongoose');
const flash = require('connect-flash');

const session = require('express-session');
const MongoStore = require('connect-mongo');
// Middleware
const {middlewareGlobal} = require('./src/middlewares/middleware');

//conectando no mongo db
mongoose.connect(process.env.CONNECTIONSTRING).then( ()=> {
    app.emit("Pronto");
    console.log("Conectei à base de dados");
}).catch( e => console.log(e));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')


//salvando sessão
const sessionOptions = session({
    secret: 'fobnaofnodnfkonkoenfk dmnp opaaa',
    store:MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
});

app.use(sessionOptions);
app.use(flash());
// Middlewares
app.use(middlewareGlobal)



app.use(routes);
//verificando se pode rodar o servidor
app.on("Pronto", () => {
    app.listen(process.env.PORT || 3000, ()=>{
        console.log("Servidor rodando na porta 3000");
    } );
});