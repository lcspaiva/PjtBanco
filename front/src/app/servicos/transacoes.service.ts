import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {
  url = '/transacoes'
  constructor(private http: HttpClient) { }

  // puxa todas as transações presentes no banco
  getTransacoes(){
    return this.http.get(this.url)
  }

  // puxa apenas uma transação no banco
  getUmaTransacao(id:any){
    return this.http.get(this.url + "/" + id)
  }

  // insere uma transacao no banco
  addTransacao(transacao:Transacao){
    // passando ql url vai responder e os dados (transação)
    return this.http.post(this.url, transacao)
  }

  // deleta um registro mediante a passagem de um id via parâmetro
  deleteTransacao(id:any){
    return this.http.delete(this.url + "/" + id)
  }

  // edita um registro baseado em um id chave
  editTransacao(id:any, transacao:Transacao){
    return this.http.put(this.url + "/"+ id, transacao)
  }
}

export interface Transacao{
  id_transferencia?: string,
  nomeCliente?: string,
  valor?: string,
  contaCliente?: string,
  data?: string,
}
