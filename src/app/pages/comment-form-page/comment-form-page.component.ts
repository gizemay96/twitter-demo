import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../../services/tweet-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment-form-page',
  templateUrl: './comment-form-page.component.html',
  styleUrls: ['./comment-form-page.component.scss'],
})
export class CommentFormPageComponent implements OnInit {
  tweet = this.tweets;

  constructor(
    private tweetService: TweetServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }


  get tweets() {
    const id: Number = +(this.route.snapshot.paramMap.get('id'));
    return this.tweetService.tweets.find((tweet) => tweet.id === id)
  }
}
