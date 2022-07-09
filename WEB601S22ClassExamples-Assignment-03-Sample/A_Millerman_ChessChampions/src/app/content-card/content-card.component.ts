import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() chessPlayer?: Content;

  constructor() {
    // this.content = {
    //   id: 0,
    //   title: '',
    //   author: '',
    //   type: ''
    // };
  }

  ngOnInit(): void {
    if (this.chessPlayer) {
      console.log("value of chess player: ", this.chessPlayer.title);
    }
  }
  displayAuthorAndId(): void {
    console.log("Chess Player Author: ", this.chessPlayer?.author, ", Chess Player ID: ", this.chessPlayer?.id);
  }

}
