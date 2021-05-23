const Atendimento = require('../models/atendimentos');

module.exports = app => {
    // Disponibilizando um Hello, World! para requisições GET executadas no endpoint /
    app.get('/atendimentos', (req, res) => {
        res.send('Você está na rota de atendimentos!')
    })

    app.post('/atendimentos', (req, res) => {

        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);

    })

}
