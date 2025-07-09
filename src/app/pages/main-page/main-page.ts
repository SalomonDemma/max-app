import { Component, inject } from '@angular/core';
import { CardHolderList } from "../../components/card-holder-list/card-holder-list";
import { CardList } from "../../components/card-list/card-list";
import { CardHolderPageStoreService } from './card-holder-page-store.service';
import { CardsPageStoreService } from './cards-page-store.service';

@Component({
  selector: 'app-main-page',
  imports: [CardHolderList, CardList],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {
  title = 'מערכת ניהול כרטיסי אשראי';
  cardHolderState = inject(CardHolderPageStoreService)
  cardsState = inject(CardsPageStoreService);
  constructor() {
    this.cardHolderState.initialize();
    this.cardsState.initialize(this.cardHolderState.selectedCardHolder()?.idNumber ?? '');
  }
}
