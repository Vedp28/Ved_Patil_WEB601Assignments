import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../models/content';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  cricketers?: Content;

  constructor(private route: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id") ?? 0);

      this.playerService.getContentItem(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.cricketers = singleItem;
        }
        // else {
        //   this.route.navigate(['/contentNotFound']);
        // }
    });
  });
  }


}
