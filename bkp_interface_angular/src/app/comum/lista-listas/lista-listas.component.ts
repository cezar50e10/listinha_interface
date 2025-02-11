import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lista-listas',
  imports: [],
  templateUrl: './lista-listas.component.html',
  styleUrl: './lista-listas.component.scss'
})
export class ListaListasComponent {
  @Input() listasCadastradas: any[] = [];
}
