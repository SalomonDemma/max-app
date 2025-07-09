import { Component, inject } from '@angular/core';
import { CardHolderPageStoreService } from '../../pages/main-page/card-holder-page-store.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-holder-list',
  imports: [  CommonModule, MatIconModule],
  templateUrl: './card-holder-list.html',
  styleUrl: './card-holder-list.scss'
})
export class CardHolderList {
  title = 'רשימת מחזיקי כרטיסים';
  state = inject(CardHolderPageStoreService);

  selectCardHolder(holder: any) {
    this.state.selectCardHolder(holder);
  }
}
