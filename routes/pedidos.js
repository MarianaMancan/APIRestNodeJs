const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{

    res.status(200).send({
        mensagem: 'Retorna todos os pedidos'
    })
});

router.post('/',(req,res,next) =>{

    res.status(200).send({
        mensagem: 'Insere um pedido'
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