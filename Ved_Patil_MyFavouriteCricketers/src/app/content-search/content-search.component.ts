import { Component, OnInit } from '@angular/core';
import {Content} from '../models/content';
import { PlayerService } from '../services/player.service';
import {DEFAULTCHESSCONTENT} from '../data/mock-player';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.css']
})
export class ContentSearchComponent implements OnInit {

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
