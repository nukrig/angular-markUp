import { Component  } from '@angular/core';
import { Card } from './interface/card.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  cards : Card[] = [
    {
      imageSrc: 'assets/images/card1.png',
      header: 'Milky way Locator',
      text: 'Mobile App'
    },
    {
      imageSrc: 'assets/images/card2.png',
      header: 'Coral database',
      text: 'Research portal'
    },
    {
      imageSrc: 'assets/images/card3.png',
      header: 'Weather now',
      text: 'Mobile App'
    },
    {
      imageSrc: 'assets/images/card4.png',
      header: 'Shipper Nearby',
      text: 'Mobile App'
    },
    {
      imageSrc: 'assets/images/card5.png',
      header: 'Find me in you',
      text: 'Web App'
    },
    {
      imageSrc: 'assets/images/card6.png',
      header: 'You’re n/ Alone',
      text: 'You’re n/ Alone'
    }
  ]
}
