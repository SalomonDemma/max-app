export enum CardType {
    CardA = 'CardA',
    CardB = 'CardB',
    CardC = 'CardC'
}

export interface Card {
    readonly cardNumber: string;
    readonly type: CardType;
    readonly expiryDate: string;      // Format: MM/YYYY
    readonly createdAt: string;       // Format: DD/MM/YYYY
    readonly cardHolderId: string;    // Format: 9 digits, e.g., "123456789"
}