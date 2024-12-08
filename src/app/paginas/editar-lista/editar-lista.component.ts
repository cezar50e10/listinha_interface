import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-lista',
  imports: [],
  templateUrl: './editar-lista.component.html',
  styleUrl: './editar-lista.component.scss'
})
export class EditarListaComponent implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listarPensamentosFavoritos();
  }


  listarPensamentosFavoritos(): Observable<any[]> {
    let id = { "id_lista_compra": "1" };
  
    // Substitua pelo seu token JWT
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZXMyQGdtYWlsLmNvbSIsImlzcyI6IkFQSSBsaXN0YS5jb21wcmFzIiwiZXhwIjoxNzMzNjg2OTg5fQ.IlLTjK4JoLSaR_PIkA6NvqGAoZW9Uyi9h-XIWDwUSa4';
  
    // Adiciona o cabeçalho de autorização
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    let result = this.http.post<any[]>(
      "http://localhost:8080/lista_de_compra/listar_produtos_lista", 
      id, 
      { 
        headers//, 
       // withCredentials: true // Permite enviar cookies e credenciais 
      }
    );
  
    result.subscribe(
      data => console.log("Resposta do servidor:", data),
      error => console.error("Erro na requisição:", error)
    );
  
    return result;
  }
}
