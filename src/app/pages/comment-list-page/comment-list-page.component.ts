import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { TweetServiceService } from '../../services/tweet-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-list-page',
  templateUrl: './comment-list-page.component.html',
  styleUrls: ['./comment-list-page.component.scss'],
})
export class CommentListPageComponent implements OnInit {
   tweet = this.tweets;
   comment = this.comments;

  constructor(
    private commentService: CommentService,
    private tweetService: TweetServiceService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    }
    get comments() {
      const id: Number = +(this.route.snapshot.paramMap.get('id'));
      return this.commentService.comments.filter((comment) => comment.tweetId === id)
     }
    
     get tweets() {
      const id: Number = +(this.route.snapshot.paramMap.get('id'));
      return this.tweetService.tweets.find((tweet) => tweet.id === id);
    }
}
