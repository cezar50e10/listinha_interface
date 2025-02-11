import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importe o RouterModule
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nova-lista',
  standalone: true,  // Marca o componente como standalone
  imports: [RouterModule],  // Importa o RouterModule para habilitar rotas neste componente
  templateUrl: './nova-lista.component.html',
  styleUrls: ['./nova-lista.component.scss']
})



export class NovaListaComponent {
  constructor(private route: ActivatedRoute) {}
  // Lógica do componente
}
