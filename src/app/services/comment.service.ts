import { Injectable } from '@angular/core';
import { Comment } from '../types/comment.type';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Comment[] = [
    {
      tweetId:1,
      id: 1,
      title: 'Anna',
      text:
        'COMMENT ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat eget libero eu lobortis. Praesent porttitor mi sed molestie ornare. Aliquam ',
      likes: 30,
      retweets: 95,
    },
    {
      tweetId:1,
      id: 2,
      title: 'mikeee',
      text:
        'COMMENT ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat eget libero eu lobortis. Praesent porttitor mi sed molestie ornare. Aliquam  ',
      likes: 30,
      retweets: 95,
    },
    {
      tweetId:2,
      id: 1,
      title: 'John',
      text:
        'COMMENT ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat eget libero eu lobortis. Praesent porttitor mi sed molestie ornare. Aliquam  ',
      likes: 30,
      retweets: 95,
    },
  ];

  constructor() { }

  submitComment(comment: Comment): void {
    const newComment: Comment = {
      id: Math.floor(Math.random() * 6) + 4  ,
      ...comment,
      likes: 0,
      retweets: 0,
    };

    this.comments.unshift(newComment);

    console.log(this.comments)
  }
}
