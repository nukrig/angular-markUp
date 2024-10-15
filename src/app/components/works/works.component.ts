import { ChangeDetectionStrategy, Component  } from '@angular/core';
import { Card } from './interface/card.interface';
import { CommonModule } from '@angular/common';
import { cards } from './works-info/works-info';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent {
  cards : Card[]= cards
}
