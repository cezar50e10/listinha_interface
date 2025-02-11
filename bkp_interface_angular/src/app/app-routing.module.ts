import { NgModule } from '@angular/core';
import { NovaListaComponent } from './paginas/nova-lista/nova-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { EditarListaComponent } from './paginas/editar-lista/editar-lista.component';
import { HomeComponent } from './paginas/home/home.component';


export const routes: Routes = [
  { path: 'novaLista', component: NovaListaComponent }, // URL: /novaLista
  { path: 'editarLista', component: EditarListaComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para /home
  { path: 'home', component: HomeComponent }, // Define o componente para a rota /home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Roteamento configurado com `forRoot()`
  exports: [RouterModule]
})
export class AppRoutingModule {}
