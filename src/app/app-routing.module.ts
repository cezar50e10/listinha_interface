import { NgModule } from '@angular/core';
import { NovaListaComponent } from './paginas/nova-lista/nova-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { EditarListaComponent } from './paginas/editar-lista/editar-lista.component';


export const routes: Routes = [
  { path: 'novaLista', component: NovaListaComponent }, // URL: /novaLista
  { path: 'editarLista', component: EditarListaComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona a rota inicial
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Roteamento configurado com `forRoot()`
  exports: [RouterModule]
})
export class AppRoutingModule {}
