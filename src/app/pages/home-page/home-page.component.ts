import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../../services/tweet-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  tweet = this.tweets;

  constructor(private tweetService: TweetServiceService) {}

  ngOnInit(): void {

  }

  get tweets() {
    return this.tweetService.tweets;
  }

  likeTweet(id:number) {
    this.tweetService.like(id);
  }

  retweet(id:number) {
    this.tweetService.retweet(id);
  }
}
