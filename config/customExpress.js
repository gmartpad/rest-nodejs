// requisição das lib
const express = require('express');
const consign = require('consign');

module.exports = () => {

    // instanciando o servidor
    const app = express();

    //autocarregando os scripts
    consign()
        .include('controllers')
        .into(app);

    return app;
}