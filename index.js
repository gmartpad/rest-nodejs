const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao');

conexao.connect(erro => {
    
    if(erro) {

        console.log(erro)
    
    } else {
        
        console.log(`Conexão ao banco de dados realizada com sucesso!`)
        
        const app = customExpress();
        
        const port = 3000;
        
        // O servidor estará rodando e escutando na porta 3000
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    
    }

})