import { Component  } from '@angular/core';
import { Card } from './interface/card.interface';
import { CommonModule } from '@angular/common';
import { cards } from './works-info/works-info';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  cards : Card[]= cards
}
