const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{

    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    })
});

router.post('/',(req,res,next) =>{

    res.status(200).send({
        mensagem: 'Insere um produto'
    })
});


router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'Retorna apenas 1 produto',
        id: id
    });
});

module.exports = router;