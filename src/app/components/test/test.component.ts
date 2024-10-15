import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NavBarComponent,RouterModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {

}
