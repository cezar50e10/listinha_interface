import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Certifique-se de importar corretamente

bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync()]
})  // Use bootstrapApplication para componentes standalone
  .catch(err => console.error(err));
