import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransacoesService, Transacao } from 'src/app/servicos/transacoes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // variavel do tipo transacao
  ListarTransacoes: Transacao[]

  // dentro do construtor declaramos variável TransacaoServico com o tipo TransacaoService
  constructor(private TransacoesService: TransacoesService, private router:Router) {
    this.ListarTransacoes = []
   }

  // ao iniciar esse componente execute essa função
  ngOnInit(): void {
    this.listarTransacoes()
  }

  listarTransacoes() {
    this.TransacoesService.getTransacoes().subscribe({
    next: (resultado) => {console.log(resultado),
                          this.ListarTransacoes = <any>resultado
                          },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
    })//subscribe
  }//listarTransações

  excluir(id:any){
    this.TransacoesService.deleteTransacao(id).subscribe({
      next: (resultado) => {console.log("transacao excluida"),
                            this.listarTransacoes()
      },
      error: (e) => console.error(e),
      complete: () => console.log("exclusão bem sucedida")
    })//subscribe
  }//excluir

  // chama a rota de editar no backend
  editar(id:any){
    this.router.navigate(['/edit/' + id])
  }

}//class InicioComponente
