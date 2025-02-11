import { Routes } from '@angular/router';
import { NovaListaComponent } from './paginas/nova-lista/nova-lista.component';

export const routes: Routes = [
    { path: 'novaLista', component: NovaListaComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // Defina a rota inicial
  ];

