const rotas = require("express").Router()
const conexao = require('./config/conexao')

// é a rota main do Banco
rotas.get("/", (req, res) => {
    let sql = 'select * from tb_conta'
    conexao.query(sql, (erro, rows, fields) =>{
        if(erro) throw erro
        res.json(rows)
    })
})

// exibe as informações de um id específico
rotas.get("/:id", (req, res) => {
    // coloca nesse formato pra ele pegar
    let {id} = req.params
    // console.log(id)
    let sql = `select * from tb_conta where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if(erro) throw erro
        res.json(rows[0])
    })
})

// rota para deletar uma transferencia tendo o id como chave
rotas.delete("/:id", (req, res) => {
    let {id} = req.params
    let sql = `delete from tb_conta where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if(erro) throw erro
        res.json({status: 'transferencia excluida com sucesso'})
    })
})

// rota para inserir uma nova transferencia no banco
rotas.post("/", (req, res) => {
    const {nomeCliente, valor, contaCliente} = req.body
    let sql = `insert into tb_conta(nomeCliente, valor, contaCliente) 
        values('${nomeCliente}', '${valor}', '${contaCliente}')`
    conexao.query(sql, (erro, rows, fields) => {
        if(erro) throw erro
        res.json({status: "transferencia adicionada com sucesso"})
    })
})

// rota para alterar um registro
rotas.put("/:id", (req, res) => {
    const {id} = req.params
    const {nomeCliente, valor, contaCliente} = req.body
    let sql = `update tb_conta set nomeCliente = '${nomeCliente}', valor = '${valor}', 
    contaCliente = '${contaCliente}' where id_transferencia = '${id}'`

    conexao.query(sql, (erro, rows, fields) => {
        if(erro) throw erro
        res.json({status:"transferencia alterada com sucesso"})
    })
})

module.exports = rotas