import { Component } from '@angular/core';

import { MenuComponent } from './menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    RouterOutlet,
    MenuComponent],
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
