import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  // através dessa url que o frontend e o backend vão se comunicar
  url = 'http://localhost:3000/tarefas'

  constructor(private http:HttpClient) { }

  getTarefas(){
    return this.http.get(this.url)
  }
}
