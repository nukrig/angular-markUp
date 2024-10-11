import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import { PlayersApiService } from './services/players-api.service';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { Iplayers } from './interface/testimonials.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy{
  cards : any[] = []
  private playersSubscription?: Subscription;
  visibleCards: any[] = [];
  currentIndex: number = 0;
  cardsPerPage: number = 4;
  isBrowser: boolean | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private playersApi:PlayersApiService
) {
    this.isBrowser = isPlatformBrowser(this.platformId);
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
        this.playersSubscription=this.playersApi.getPlayers().subscribe((data: Iplayers) => {
        this.cards = data.player;
        this.updateCardsPerPage();     
        this.updateVisibleCards();
      });
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
    if ((this.currentIndex + this.cardsPerPage) < this.cards.length) {
      this.currentIndex += this.cardsPerPage;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleCards();
  }

  prevCard() {
    if ((this.currentIndex - this.cardsPerPage) >= 0) {
      this.currentIndex -= this.cardsPerPage;
    } else {
      this.currentIndex = this.cards.length - this.cardsPerPage;
    }
    this.updateVisibleCards();
  }
  ngOnDestroy() {
    if (this.playersSubscription) {
      this.playersSubscription.unsubscribe();
    }
  }
}
