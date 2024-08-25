const jwt = require('jsonwebtoken');

exports.required = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({ mensagem: 'Falha na autenticação: Token não fornecido' });
        }

        const token = authHeader.split(' ')[1]; // Supondo "Bearer [token]"
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação' });
    }
};

exports.optional = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_KEY);
            req.user = decode;
        }
        next();
    } catch (error) {
        next();
    }
};
