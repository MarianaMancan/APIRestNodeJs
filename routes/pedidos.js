const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{

    res.status(200).send({
        mensagem: 'Retorna todos os pedidos'
    })
});

router.post('/',(req,res,next) =>{

const pedido ={
    id_produto: req.body.id_produto,
    quantidade : req.body.quantidade
};

    res.status(200).send({
        mensagem: 'Insere um pedido',
        pedidoCriado: pedido
    })
});


router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    res.status(200).send({
        mensagem: 'Retorna apenas 1 pedido',
        id: id
    });
});

module.exports = router;