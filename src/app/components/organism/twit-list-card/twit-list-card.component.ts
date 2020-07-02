import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../../../services/tweet-service.service';

@Component({
  selector: 'app-twit-list-card',
  templateUrl: './twit-list-card.component.html',
  styleUrls: ['./twit-list-card.component.scss']
})
export class TwitListCardComponent implements OnInit {

  constructor(private tweetService: TweetServiceService) { }

  ngOnInit(): void {
  }

  get tweets() {
    return this.tweetService.tweets;
  }

  onLike(id: number) {
    this.tweetService.like(id);
  }

  onRetweet(id: number) {
    this.tweetService.retweet(id);
  }

}
