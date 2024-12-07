import { Component } from '@angular/core';



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NovaListaComponent } from "./paginas/nova-lista/nova-lista.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    NovaListaComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listinha_interface';
  isMenuOpen = true;  // Estado inicial do menu (aberto)

  // Método para alternar entre abrir/fechar o menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
