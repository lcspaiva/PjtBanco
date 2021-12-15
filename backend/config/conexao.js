const mysql = require("mysql")

// configurando a conexao com o banco
const conexao = mysql.createConnection({
    host:"localhost",
    user:"lucas",
    password:"1234",
    port: 3306,
    database:"db_banco"
})

conexao.connect((erro) => {
    if(erro) throw erro
    console.log("estamos conectados ao banco do banco haha")
})

module.exports = conexao