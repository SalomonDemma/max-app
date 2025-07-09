import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from "./pages/main-page/main-page";

@Component({
  selector: 'app-root',
  imports: [MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'max-app';
}
