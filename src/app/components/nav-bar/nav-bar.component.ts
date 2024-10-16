import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme/theme.service';
import { LanguageService } from '../../services/language/language.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  isMenuOpen = false;
  isDropdownOpen = false;

  constructor(public themeService:ThemeService, public languageService:LanguageService,public translate:TranslateService){
    this.translate.setDefaultLang(this.languageService.currentLang)
  }



  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.toggleDropdown()
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  switchToEnglish() {
    this.languageService.switchLanguage('en');
    this.toggleDropdown()
  }

  switchToGeorgian() {
    this.languageService.switchLanguage('ka');
    this.toggleDropdown()
  }
}
