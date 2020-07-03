import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { TweetServiceService } from '../../services/tweet-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-list-page',
  templateUrl: './comment-list-page.component.html',
  styleUrls: ['./comment-list-page.component.scss']
})
export class CommentListPageComponent implements OnInit {

  tweet = this.tweets;
  selectedTweet;

  comment = this.comments;
  selectedComments;

  constructor(
    private commentService: CommentService,
    private tweetService: TweetServiceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    /* FILTER COMMENTS */
    const getId: string = this.route.snapshot.paramMap.get('id');
    const id = +getId;

    const selectComent = this.comment.filter((comment) => comment.tweetId === id);
    this.selectedComments = selectComent;
    /* FILTER COMMENTS */


    /* GET SELECTED TWEET */
    const selectedId = id - 1
    const selectTweet = this.tweet[selectedId]
    this.selectedTweet = selectTweet;
    /* GET SELECTED TWEET */

    console.log(this.selectedComments)
  }

  get comments() {
    return this.commentService.comments;
  }

  get tweets() {
    return this.tweetService.tweets;
  }

}
