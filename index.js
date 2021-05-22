// requisição da lib
const express = require('express');

// instanciando o servidor
const app = express();

// Disponibilizando um Hello, World! para requisições GET executadas no endpoint /
app.get('/atendimentos', function (req, res) {
    res.send('Você está na rota de atendimentos!')
})

const port = 3000;

// O servidor estará rodando e escutando na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})