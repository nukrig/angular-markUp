import { Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isDarkMode = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
   private themeService: ThemeService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.themeService.isDarkMode$.subscribe((isDark) => {
        this.isDarkMode = isDark;
        this.updateTheme();
      });
    }
  }
  updateTheme(): void {
    
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
