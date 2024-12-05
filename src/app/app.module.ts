import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importando módulos do Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,  // Adicione os módulos que deseja usar
    MatToolbarModule  // Adicione os módulos que deseja usar
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
