const customExpress = require('./config/customExpress')

const app = customExpress();

const port = 3000;

// O servidor estará rodando e escutando na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})