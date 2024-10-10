import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(true);

  isDarkMode$ = this.isDarkModeSubject.asObservable();

  toggleTheme(): void {
    const currentTheme = this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(!currentTheme);
  }

  get isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}

