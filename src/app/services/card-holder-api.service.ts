import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardHolder } from '../models/card-holder.model';


@Injectable({
    providedIn: 'root'
})
export class CardholderApiService {

    #baseUrl = 'https://localhost:7018/api'; // Base URL for the API

    #httpClient = inject(HttpClient); // Injecting HttpClient to make HTTP requests

    getCardholders(): Observable<CardHolder[]> {
        const url = `${this.#baseUrl}/cardholders`;
        return this.#httpClient.get<CardHolder[]>(url);
    }

    deleteCardholder(cardholder: CardHolder): Observable<void> {
        const url = `${this.#baseUrl}/cardholders/${cardholder.idNumber}`;
        return this.#httpClient.delete<void>(url);
    }
}