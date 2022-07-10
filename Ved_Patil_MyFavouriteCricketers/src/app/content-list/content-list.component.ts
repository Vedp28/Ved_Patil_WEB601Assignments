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


  constructor() { 
    this.cricketers= [{
      id: 0,
      title: 'Virat Kohli',
      body: 'Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman',
      author: 'Anushka Sharma',
      imageLink: 'https://www.kreedon.com/wp-content/uploads/2019/01/kohli-7596.jpg.webp',
      type: 'Batsman, Former Captain',
      hashtags: ['Virat Kohli']
    },
    {
      id: 1,
      title: 'Dale Styne',
      body: 'Dale Willem Steyn is a South African former professional cricketer who played for the South African Cricket Team. He is often regarded as one of the greatest fast bowlers of all time and the best Test bowler of his generation',
      author: 'Jeanne Kietzmann',
      imageLink: 'https://cdn-wp.thesportsrush.com/2021/08/5752b472-dale-steyn-odi.jpg',
      type: '',
      hashtags: ['Dale Styne']
    },
    {
      id: 2,
      title: 'A B De Villiers',
      body: 'Abraham Benjamin de Villiers is a former South African international cricketer. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019.',
      author: 'Danielle de Villiers',
      imageLink: 'https://images.indianexpress.com/2019/12/ab-de-villiers-1200.jpg',
      type: 'Wicket-Keeper Batsman, Former Captain',
      hashtags: ['Abraham Benjamin de Villiers']
    },
    {
      id: 3,
      title: 'Rohit Sharma',
      body: 'Rohit Gurunath Sharma is an Indian international cricketer who is the current captain of the Indian national team. A right-handed opening batsman and an occasional right-arm off break bowler, he is widely acknowledged as one of the most outstanding batsmen in limited overs cricket.',
      author: ' Ritika Sajdeh',
      imageLink: 'https://www.kreedon.com/wp-content/uploads/2019/03/Rohit-Sharma2.jpg.webp',
      type: 'Batsman, Captain',
      hashtags: ['Rohit Sharma']
    },
    {
      id: 4,
      title: 'James Anderson',
      body: 'James Michael Anderson OBE is an English international cricketer who plays for Lancashire County Cricket Club and the England cricket team. He is also a part time cricket commentator at BBC.',
      author: ' Daniella Lloyd',
      imageLink: 'https://cdn-wp.thesportsrush.com/2021/12/085268f8-josh-inglis-1.jpg',
      type: '',
      hashtags: ['James Anderson']
    },
    {
      id: 5,
      title: 'Benjamin Andrew Stokes',
      body: 'Benjamin Andrew Stokes OBE is an English cricketer who is the current captain of the England Test team and plays for the England One Day International and Twenty20 International teams.',
      author: ' Clare Ratcliffe',
      imageLink: 'https://images.news18.com/ibnlive/uploads/2021/12/ben-stokes-confident-about-bowling-in-2nd-test-16394793283x2.jpg?impolicy=website&width=510&height=356',
      type: 'All-Rounder, Captain',
      hashtags: ['Ben Stokes']
    },
    {
      id: 6,
      title: 'Ravindrasinh Anirudhsinh Jadeja',
      body: 'Ravindrasinh Anirudhsinh Jadeja, commonly known as Ravindra Jadeja, is an Indian international cricketer. He is an all-rounder, who bats left-handed and bowls left-arm orthodox spin. He was the captain of the Chennai Super Kings in the Indian Premier League. He represents Saurashtra in first-class cricket.',
      author: 'Riva Solanki',
      imageLink: 'https://images.indianexpress.com/2021/05/ravindra-jadeja-fb.jpg',
      type: 'All-Rounder',
      hashtags: ['Ravi Jadeja']
    }
    ]
=======
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

  
  constructor(private PlayerService: PlayerService) {
    this.cricketers = [];

>>>>>>> Stashed changes
  }


  ngOnInit(): void {
    // getContent test
    this.PlayerService.getContent().subscribe(chessChampionsArray =>
      this.cricketers = chessChampionsArray);

    
  }

}
