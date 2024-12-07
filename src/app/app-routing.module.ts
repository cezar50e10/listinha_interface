import { NovaListaComponent } from './paginas/nova-lista/nova-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'novaLista', component: NovaListaComponent },
  { path: '', redirectTo: '/novaLista', pathMatch: 'full' },  // Defina a rota inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Roteamento configurado com `forRoot()`
  exports: [RouterModule]
})
export class AppRoutingModule {}
