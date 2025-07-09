import { Injectable } from '@angular/core';
import { inject, signal } from '@angular/core';
import { CardholderApiService } from '../../services/card-holder-api.service';
import { CardHolder } from '../../models/card-holder.model';

@Injectable({
  providedIn: 'root'
})
export class CardHolderPageStoreService {
  #cardHolderApiService = inject(CardholderApiService);

  #cardHolders = signal<CardHolder[]>([]);
  #selectedCardHolder = signal<CardHolder | null>(null);

  cardHolders = this.#cardHolders.asReadonly();
  selectedCardHolder = this.#selectedCardHolder.asReadonly();

  initialize() {
    this.#cardHolderApiService.getCardholders().subscribe(cardHolders => {
      this.#cardHolders.set(cardHolders);
    });
    
    const cardHolders = this.#cardHolders();
    if (cardHolders.length > 0) {
      this.#selectedCardHolder.set(cardHolders[cardHolders.length - 1]);
    }
  }

  selectCardHolder(cardHolder: CardHolder) {
    this.#selectedCardHolder.set(cardHolder);
  }
}