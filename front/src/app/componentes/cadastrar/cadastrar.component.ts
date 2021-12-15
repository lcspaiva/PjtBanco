import { Component, OnInit } from '@angular/core';
// importando o arquivo de serviços
import { TransacoesService, Transacao } from 'src/app/servicos/transacoes.service';
// importando a biblioteca para se trabalhar com rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {
  transacao:Transacao = {
    id_transferencia:'',
    nomeCliente:'',
    valor:'',
    contaCliente:'',
    data:''
  }

  constructor(private TransacoesService:TransacoesService, private router:Router) { }

  ngOnInit(): void {
  }

  // funcao para ser chamada no front que disparará o back
  adicionar(){
    // o atributo tarefa é auto_increment, daí ele não pode ir, logo, temos que excluir
    delete this.transacao.id_transferencia
    // o atributo da data é gerado automatico pelo banco, tbm não temos controle e temos que excluir do modelo
    delete this.transacao.data

    // chamando a função declarada no TransacoesService que compreende a rota do back
    this.TransacoesService.addTransacao(this.transacao).subscribe({
      next: (resultado) => console.log("transação adicionada com sucesso"),
      error: (e) =>        console.log(e),
      complete: () =>      console.info("completada a inserção")
    }) //subscribe

    this.router.navigate(['/inicio'])
  }//adcionar
}
