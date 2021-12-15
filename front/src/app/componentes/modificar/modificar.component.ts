import { TransacoesService, Transacao } from './../../servicos/transacoes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  transacao:Transacao={
    id_transferencia:'',
    nomeCliente: '',
    valor: '',
    contaCliente:'',
    data: ''
  }

  constructor(private TransacoesService: TransacoesService, private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activeRoute.snapshot.params['id']
    this.TransacoesService.getUmaTransacao(id_entrada).subscribe({
      next: (resultado) => {console.log(resultado), this.transacao=resultado},
      error: (e) => console.error(e),
      complete: () => console.info("edit")
    })
  }//ngOnInit

  modificar(){
    this.TransacoesService.editTransacao(this.transacao.id_transferencia, this.transacao).subscribe({
      next: (resultado) => console.log(resultado),
      error: (e) => console.error(e),
      complete: () => console.info("edição completada com sucesso")
    })//subscribe
    this.router.navigate(['/inicio'])
  }//,modificar
}//class
