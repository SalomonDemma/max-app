import { Injectable, inject, signal } from '@angular/core';
import { CardsApiService } from '../../services/cards-api.service';
import { Card } from '../../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsPageStoreService {
  #cardsApiService = inject(CardsApiService);

  // Internal signal to manage card list
  #cards = signal<Card[]>([]);
  
  cards = this.#cards.asReadonly();

  initialize(cardHolderId: string) {
    this.#cardsApiService.getCards(cardHolderId).subscribe(cards => {
      this.#cards.set(cards);
    });
  }

getcardsList(CardHolderId: string) {

    return this.#cardsApiService.getCards(CardHolderId).subscribe(cards => {
      this.#cards.set(cards);
    }); 
  }

  addCard(card: Card) {
    this.#cardsApiService.addCard(card).subscribe(newCard => {
      this.#cards.update(list => [...list, newCard]);
    });
  }



  loadSingleCard(cardNumber: string) {
    this.#cardsApiService.getCardByNumber(cardNumber).subscribe(card => {
      this.#cards.update(list => {
        const exists = list.some(c => c.cardNumber === card.cardNumber);
        return exists ? list : [...list, card];
      });
    });
  }
}
