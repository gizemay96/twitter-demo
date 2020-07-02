import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../types/tweet.type';
import { TweetServiceService } from '../../services/tweet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.scss']
})
export class TweetInputComponent implements OnInit {

  tweet: Tweet = {
    title: '',
    text: '',
  };


  constructor(
    private tweetService: TweetServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.tweetService.submitTweet(this.tweet);
    this.tweet.title = '';
    this.tweet.text = '';
    this.router.navigateByUrl('/');
  }

}
