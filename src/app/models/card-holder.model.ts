import { Card } from './card.model';

export interface CardHolder {
    readonly idNumber: string;
    readonly fullName: string;
    readonly address: string;
    cards: Card[];
}