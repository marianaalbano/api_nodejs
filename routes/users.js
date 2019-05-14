const express = require('express');
const router = express.Router();
const Users = require('../model/user')

router.get('/', function (req, res) {
    console.log('get do user');
    Users.find({}, function (err, data){
        if (err) return res.send({ error: 'Erro na consulta de usuarios' });
        return res.send(data);
    });
});

router.post('/create', function (req, res) {
    const { email, password, name } = req.body;
    console.log( email, password, name );

    if (!email || !password) return res.send({ error: 'Dados insuficientes'});
    
    // Users.findOne({email: email}, function (err, data) {
    //     if (err) return res.send({ error: 'Erro ao buscar usuario'});
    //     if (data) return res.send({ error: 'Usuário já registrado' });

    //     console.log('criando usuario')
    Users.create(req.body, function (err, data) {
        if (err) return res.send({ error: 'Erro ao criar usuário' })
        return res.send(data);
    });
});


module.exports = router;