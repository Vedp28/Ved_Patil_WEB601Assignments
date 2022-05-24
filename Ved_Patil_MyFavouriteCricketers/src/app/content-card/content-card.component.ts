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
  }

}
