import { Component } from '@angular/core';
import { HomeHeroComponent } from "../../components/home-hero/home-hero.component";

@Component({
  selector: 'app-homepage',
  imports: [HomeHeroComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
