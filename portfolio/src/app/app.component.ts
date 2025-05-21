import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {
  route = signal('home');
  setRoute(newRoute: string) {
    this.route.set(newRoute);
  }
}