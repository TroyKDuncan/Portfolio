import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TypewriterDirective } from '../../directives/typewriter.directive';

@Component({
  selector: 'app-home-hero',
  imports: [MatIconModule, TypewriterDirective],
  standalone: true,
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css'
})
export class HomeHeroComponent {

}
