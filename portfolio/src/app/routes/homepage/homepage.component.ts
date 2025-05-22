import { Component } from '@angular/core';
import { HomeHeroComponent } from "../../components/home-hero/home-hero.component";
import { HomeWhatIBringComponent } from "../../components/home-what-i-bring/home-what-i-bring.component";

@Component({
  selector: 'app-homepage',
  imports: [HomeHeroComponent, HomeWhatIBringComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
