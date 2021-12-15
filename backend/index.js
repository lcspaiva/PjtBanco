// Atividade:
// Começar uma aplicação nova como essa que acabamos de terminar o backend.
// Nessa atividade vocês devem criar o backend de uma aplicação.
// Essa aplicação vai gerenciar as transferências de uma conta bancária. Para isso, vocês devem criar um novo database com uma tabelas com os seguintes campos: id_tranferencia, nomeCliente, valor, contaCliente.
// Na construção desse backend vocês desenvolver todo o crud para esse data base.

require("./config/conexao")

const express = require("express")
const app = express()
const porta = 3000

app.get("/", (req, res) => {
    res.send("Teste ok")
})

// aquela porra de json de sempre
app.use(express.json())

// puxando o arquivo com as rotas
const rotasBanco = require("./rotas")

// usando as rota do Banco, as rotas serão acessadas via /banco/rotaN
app.use("/transacoes", rotasBanco)

// colocando o app pra ouvir na porta
app.listen(porta, () => {
    console.log("app ouvindo na porta: " + porta)
})

