import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  chessPlayersList: Content[];
  types: string[] = ["", "IM", "FM", "GM"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  constructor() {
    this.chessPlayersList = [
      {
        id: 0,
        title: 'Magnus Carlsen',
        body: "Current world champ",
        author: "Alex Millerman",
        imageLink: "https://i.guim.co.uk/img/media/ad35976aca03db7b6b355111a3dd4e3db687d724/0_136_2048_1229/master/2048.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c2b38f880baf6f2edba26b98fdf4420c",
        type: "GM",
        hashtags: ["younggrandmaster", "thegoat", "gofor2900"]
      }, {
        id: 1,
        title: 'Alexandra Botez',
        body: "	Woman FIDE Master",
        author: "Alex Millerman",
        imageLink: "https://images.chesscomfiles.com/uploads/v1/master_player/7064c138-1af7-11eb-b69b-0371950d641f.8e25e027.5000x5000o.6254ebef0621.jpeg",
        type: "FM",
        hashtags: ["thebotezgambit"]
      }, {
        id: 2,
        title: 'Rameshbabu Praggnanandhaa',
        body: "Grandmaster",
        author: "Alex Millerman",
        imageLink: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220222035049-01-praggnanandhaa-chess-portrait-file-2019.jpg",
        type: "GM",
        hashtags: ["youngestgrandmaster", "watchoutmagnus"]
      }, {
        id: 3,
        title: 'Ben Finegold',
        // body: "Fide Grandmaster",
        author: "Alex Millerman",
        // imageLink: "https://chessdailynews.com/wp-content/uploads/2010/01/Ben-Finegold-4.jpg",
        type: "GM",
        // hashtags: ["gmat40", "neverplayf3"]
      }, {
        id: 4,
        title: 'Viswanathan Anand',
        body: "A 52 year old Grandmaster who is doing very well in 2022 chess tournaments",
        author: "Alex Millerman",
        imageLink: "https://im.rediff.com/sports/2020/dec/10anand.jpg",
        type: "GM",
        hashtags: ["gmover50"]
      }, {
        id: 5,
        title: "Ding Liren",
        body: "Took part in 30+ tournaments in China within the span of a month to quality for the world candidates tournament",
        author: "Levy Rozman",
        type: "GM"
      }, {
        id: 6,
        title: "Levy Rozman",
        body: "AKA GothamChess",
        author: "Alex Millerman",
        type: "IM",
        hashtags: ["makesmoredoingyoutube", "notasupergm"]
      }, {
        id: 7,
        title: "Alex Millerman",
        body: "Will never have a chess title, probably",
        author: "Alex Millerman",
        hashtags: ["watchesmorethanheplayschess"]
      }, {
        id: 8,
        title: "Andrew Steele",
        body: "Maybe plays chess?",
        author: "Alex Millerman",
        type: "",
      }
    ];

  }

  ngOnInit(): void {
  }
  checkForAuthorInList(authorNameValue: string): void {
    if (this.chessPlayersList.some(player => player.author.toLowerCase() === authorNameValue.toLowerCase())) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }
  }

}
