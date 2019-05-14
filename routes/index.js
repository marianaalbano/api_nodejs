const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: "GET OK para raiz"});
});

router.post('/', (req, res) => {
    return res.send({message: "POST OK para raiz"});
});


module.exports = router;