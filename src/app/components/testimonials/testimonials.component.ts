import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, 
  HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { PlayersApiService } from './services/players-api.service';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { Iplayers, Player } from './interface/testimonials.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent implements OnInit, OnDestroy{
  cards : Player[] = []
  private playersSubscription?: Subscription;
  visibleCards: Player[] = [];
  currentIndex: number = 0;
  cardsPerPage: number = 4;
  isBrowser: boolean | undefined;

  // swiperEl = document.querySelector('swiper-container');

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private playersApi:PlayersApiService,
  private cd: ChangeDetectorRef
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
    this.getPlayersApi()
    // if(this.swiperEl){
    //   this.swiperEl.initialize();
    // }
  }

  getPlayersApi(){
        this.playersSubscription = this.playersApi.getPlayers().subscribe((data : Iplayers) => {
            this.useApiInformation(data)
      })
  }
  useApiInformation(info: Iplayers){
    this.cards = info.player;
    this.updateCardsPerPage();     
    this.updateVisibleCards();
    this.cd.markForCheck();
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
