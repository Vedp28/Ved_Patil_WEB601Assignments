import { Component } from '@angular/core';
import {Content} from './models/content';
import {List} from './models/list'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ved_Patil_MyFavouriteCricketers';

  DataOne: Content;
  DataTwo: Content;
  DataThree: Content;
  DataFour: Content;
  DataFive: Content;
  
  listOfContent: List = new List;

  constructor() {
    this.DataOne = {
      id: 0,
      title: 'Virat Kohli',
      body: 'Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman',
      author: 'Anushka Sharma',
      imageLink: 'https://www.kreedon.com/wp-content/uploads/2019/01/kohli-7596.jpg.webp',
      type: 'Batsman',
      hashtags: ['Virat Kohli']
    }
    this.DataTwo = {
      id: 1,
      title: 'Dale Styne',
      body: 'Dale Willem Steyn is a South African former professional cricketer who played for the South African Cricket Team. He is often regarded as one of the greatest fast bowlers of all time and the best Test bowler of his generation',
      author: 'Jeanne Kietzmann',
      imageLink: 'https://cdn-wp.thesportsrush.com/2021/08/5752b472-dale-steyn-odi.jpg',
      type: 'Fast Bowler',
      hashtags: ['Dale Styne']
    }
    this.DataThree = {
      id: 2,
      title: 'A B De Villiers',
      body: 'Abraham Benjamin de Villiers is a former South African international cricketer. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019.',
      author: 'Danielle de Villiers',
      imageLink: 'https://images.indianexpress.com/2019/12/ab-de-villiers-1200.jpg',
      type: 'Wicket-Keeper Batsman',
      hashtags: ['Abraham Benjamin de Villiers']
    }
    this.DataFour = {
      id: 3,
      title: 'Rohit Sharma',
      body: 'Rohit Gurunath Sharma is an Indian international cricketer who is the current captain of the Indian national team. A right-handed opening batsman and an occasional right-arm off break bowler, he is widely acknowledged as one of the most outstanding batsmen in limited overs cricket.',
      author: ' Ritika Sajdeh',
      imageLink: 'https://www.kreedon.com/wp-content/uploads/2019/03/Rohit-Sharma2.jpg.webp',
      type: 'Batsman',
      hashtags: ['Rohit Sharms']
    }
    this.DataFive = {
      id: 4,
      title: 'James Anderson',
      body: 'James Michael Anderson OBE is an English international cricketer who plays for Lancashire County Cricket Club and the England cricket team. He is also a part time cricket commentator at BBC.',
      author: ' Daniella Lloyd',
      imageLink: 'https://cdn-wp.thesportsrush.com/2021/12/085268f8-josh-inglis-1.jpg',
      type: 'Fast Bowler',
      hashtags: ['James Anderson']
    }


   
      
    

        this.listOfContent.addContent(this.DataOne);
        this.listOfContent.addContent(this.DataTwo);
        this.listOfContent.addContent(this.DataThree);
        this.listOfContent.addContent(this.DataFour);
        this.listOfContent.addContent(this.DataFive);
  }

}