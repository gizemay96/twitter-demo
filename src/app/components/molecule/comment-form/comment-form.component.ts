import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../../types/comment.type';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  comment: Comment = {
    tweetId:0,
    title: '',
    text: '',
  };

  constructor(
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const getId: string = this.route.snapshot.paramMap.get('id');
    const id = +getId
    this.comment.tweetId=id;

  }


  onSubmit() {
    console.log(this.comment)
    this.commentService.submitComment(this.comment);
    this.comment.title = '';
    this.comment.text = '';
    this.router.navigateByUrl(`/commentlist/${this.comment.tweetId}`);

 
  }

}
