import { Component } from '@angular/core';
import {Content} from './models/content';
import { PlayerService } from './services/player.service';
import {DEFAULTCHESSCONTENT} from './data/mock-player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ved_Patil_MyFavouriteCricketers';
  individualPlayer: Content = DEFAULTCHESSCONTENT;

  constructor(private PlayerService: PlayerService) {

  }

  ngOnInit(): void {
    // getContentItem test
    this.PlayerService.getContentItem(1).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item: ", chessChampionsSingleItem);
      this.individualPlayer = chessChampionsSingleItem;
    });

  }

  checkForIdInList(idValue: string): void {
    this.PlayerService.getContentItem(Number(idValue)).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item AGAIN: ", chessChampionsSingleItem);
      this.individualPlayer = chessChampionsSingleItem;
    });
  }
}