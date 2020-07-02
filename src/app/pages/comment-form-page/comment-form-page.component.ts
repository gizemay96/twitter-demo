import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../../services/tweet-service.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../types/comment.type'


@Component({
  selector: 'app-comment-form-page',
  templateUrl: './comment-form-page.component.html',
  styleUrls: ['./comment-form-page.component.scss']
})
export class CommentFormPageComponent implements OnInit {

  tweet = this.tweets;

  comment: Comment = {
    tweetId:0,
    title: '',
    text: '',
  };

  constructor(
    private tweetService: TweetServiceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const getId: string = this.route.snapshot.paramMap.get('id');
    const id = +getId;
    const selectedId = id - 1

    console.log(selectedId)
  }

  get tweets() {
    return this.tweetService.tweets;
  }

}
