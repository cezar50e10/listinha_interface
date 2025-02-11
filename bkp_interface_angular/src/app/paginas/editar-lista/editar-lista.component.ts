import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaListasComponent } from "../../comum/lista-listas/lista-listas.component";

@Component({
  selector: 'app-editar-lista',
  imports: [ListaListasComponent],
  templateUrl: './editar-lista.component.html',
  styleUrl: './editar-lista.component.scss'
})
export class EditarListaComponent implements OnInit{

  constructor(private http: HttpClient) { }
  public listasCadastradas: any[] = [];
  ngOnInit(): void {
    this.listarListasDeComprasUsuarioLogado();
  }


  listarListasDeComprasUsuarioLogado(): Observable<any[]> {
    let id = { "id_lista_compra": "1" };
    
    // Substitua pelo seu token JWT
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZXMyQGdtYWlsLmNvbSIsImlzcyI6IkFQSSBsaXN0YS5jb21wcmFzIiwiZXhwIjoxNzM4MDI0NjQ0fQ.tqTxX-HUshVA8mC9onDNs-UV27IKLvQjP6T9LinL584';
  
    // Adiciona o cabeçalho de autorização
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    let result = this.http.post<any[]>(
      "http://localhost:8080/lista_de_compra/listar_por_usuario", 
      {},//id, 
      { 
        headers//, 
       // withCredentials: true // Permite enviar cookies e credenciais 
      }
    );
  
    result.subscribe(
        (data) => {
          console.log("Resposta do servidor:", data);
          this.listasCadastradas = data; // Armazena os dados na variável
        },
      error => console.error("Erro na requisição:", error)
    );
  
    return result;
  }
}
