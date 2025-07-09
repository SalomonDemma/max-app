import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsApiService {
  #baseUrl = 'https://localhost:7018/api/cards';
  #httpClient = inject(HttpClient);

  // Matches: cardsGroup.MapPost("by-holder", GetCardsByHolderId)
  getCards(cardHolderId: string): Observable<Card[]> {
    const url = `${this.#baseUrl}/by-holder`;
    return this.#httpClient.post<Card[]>(url, { cardHolderId });
  }

  // Matches: cardsGroup.MapPost("", AddCard)
  addCard(card: Card): Observable<Card> {
    return this.#httpClient.post<Card>(this.#baseUrl, card);
  }

  // Matches: cardsGroup.MapPost("get-card", GetCardByNumber)
  getCardByNumber(cardNumber: string): Observable<Card> {
    const url = `${this.#baseUrl}/get-card`;
    return this.#httpClient.post<Card>(url, { cardNumber });
  }
}

