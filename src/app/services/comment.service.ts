import { Injectable } from '@angular/core';
import { Comment } from '../types/comment.type';
import { commentData } from '../models/shared/commentData.json';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments = commentData;

  constructor() {}

  submitComment(comment: Comment): void {
    const newComment = {
      id: Math.floor(Math.random() * 100),
      ...comment,
      likes: 0,
      retweets: 0,
    };

    this.comments.unshift(newComment);
  }
}
