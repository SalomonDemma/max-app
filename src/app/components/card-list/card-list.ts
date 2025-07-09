import { Component, inject, Input } from '@angular/core';
import { CardHolder } from '../../models/card-holder.model';
import { CardsPageStoreService } from '../../pages/main-page/cards-page-store.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss'
})
export class CardList {
  @Input() cardHolder: CardHolder | null = null;
  title = 'רשימת כרטיסים';
  state = inject(CardsPageStoreService);
}
