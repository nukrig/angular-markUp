import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import { BlogCard } from './interface/testimonials.interface';
import { cards } from './blogs-info/blogs-info';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  cards : BlogCard[] = cards

  visibleCards: BlogCard[] = [];
  currentIndex: number = 0;
  cardsPerPage: number = 4;
  isBrowser: boolean | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.updateVisibleCards();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isBrowser) {
      this.updateCardsPerPage();
      this.updateVisibleCards(); 
    }
   
  }

  ngOnInit() {
    if (this.isBrowser) {
    this.updateCardsPerPage();
    this.updateVisibleCards();
    }
    
  }

  updateCardsPerPage() {
    if(this.isBrowser){
      const screenWidth = window.innerWidth;
      if (screenWidth < 750) {
        this.cardsPerPage = 1;
      } else {
        this.cardsPerPage = 4;
      }
    }
  }

  updateVisibleCards() {
    this.visibleCards = this.cards.slice(this.currentIndex, this.currentIndex + this.cardsPerPage);
  }

  nextCard() {
    if (this.currentIndex + this.cardsPerPage < this.cards.length) {
      this.currentIndex += this.cardsPerPage;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleCards();
  }

  prevCard() {
    if (this.currentIndex - this.cardsPerPage >= 0) {
      this.currentIndex -= this.cardsPerPage;
    } else {
      this.currentIndex = this.cards.length - this.cardsPerPage;
    }
    this.updateVisibleCards();
  }
}
