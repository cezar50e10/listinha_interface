import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importando módulos do Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module'; 


@NgModule({
  
  imports: [
    BrowserModule,
    MatButtonModule,  
    MatToolbarModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
