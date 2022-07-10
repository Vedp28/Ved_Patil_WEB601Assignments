import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() cricketers?: Content;

  constructor() { }

  ngOnInit(): void {
    if (this.cricketers) {
      console.log("value of chess player: ", this.cricketers.title);
    }
  }
  displayAuthorAndId(): void {
    console.log("Chess Player Author: ", this.cricketers?.author, ", Chess Player ID: ", this.cricketers?.id);
  }

}
