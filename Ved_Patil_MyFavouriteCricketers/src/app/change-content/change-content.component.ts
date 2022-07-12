import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.css']
})
export class ChangeContentComponent implements OnInit {

  contentItem: Content = {
    title: "",
    body: "",
    id: null,
    author: '',
    type:'',
    hashtags: []
  };
  tempTags: string = '';

  constructor(private PlayerService: PlayerService) { }

  ngOnInit(): void {
  }

  addContentToServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.PlayerService.addContentItem(this.contentItem)
    .subscribe(newContentFromServer =>
      console.log("Success! New content added", newContentFromServer)
       );
   }
   updateContentOnServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.PlayerService.updateContentItem(this.contentItem)
    .subscribe(() =>
      console.log("Content updated successfully", this.contentItem)
    );
}
}
