import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';  // Importando MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar';  // Importando MatToolbarModule
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,  // Marca o componente como standalone
  imports: [MatButtonModule, MatToolbarModule,MatSidenavModule],  // Importando os módulos necessários
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  // Lógica do componente aqui
}