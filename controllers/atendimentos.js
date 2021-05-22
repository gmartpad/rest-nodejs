module.exports = app => {
    // Disponibilizando um Hello, World! para requisições GET executadas no endpoint /
    app.get('/atendimentos', function (req, res) {
        res.send('Você está na rota de atendimentos!')
    })
}
