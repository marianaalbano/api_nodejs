const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// mongoose connection

const url = 'mongodb://<preencher>';
const options= { useNewUrlParser: true};

// mongose connect
mongoose.connect(url, options);
mongoose.set('userCreateIndex', true);

mongoose.connection.on('error', function (err) {
    console.log('Erro na conexao com o banco: ' + err);
});

mongoose.disconnect('error', function (err) {
    console.log('Aplicacao desconectada do banco de dados');
});

mongoose.connection.on('connected', function () {
    console.log('Aplicacao conectada ao banco de dados')
});

// body parser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// rotas

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users/', usersRoute);

app.listen(3000);

module.exports = app;


