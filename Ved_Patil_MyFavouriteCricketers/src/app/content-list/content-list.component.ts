import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { PlayerService } from '../services/player.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  cricketers:Content[];


  

  
  hikaru: Content = {
    id: 3,
    title: 'Hikaru Nakamura',
    body: "A chess champion who became a successful youtuber instead",
    author: "Alex Millerman",
    type: "GM",
    hashtags: ["supergm", "indepthanalysis"]
  }
  types: string[] = ["", "IM", "FM", "GM"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  constructor(private chessChampionService: PlayerService) {
    this.cricketers = [];

  }

  ngOnInit(): void {
    // getContent test
    this.chessChampionService.getContent().subscribe(chessChampionsArray =>
      this.cricketers = chessChampionsArray);

    
  }

  checkForAuthorInList(authorNameValue: string): void {
    if (this.cricketers.some(player => player.author.toLowerCase() === authorNameValue.toLowerCase())) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }
  }

  authorCheck = "";
  

  
}
