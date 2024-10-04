import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutComponent } from "../../components/about/about.component";
import { WorksComponent } from "../../components/works/works.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, AboutComponent, WorksComponent, TestimonialsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
