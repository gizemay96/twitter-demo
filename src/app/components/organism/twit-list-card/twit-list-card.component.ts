import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twit-list-card',
  templateUrl: './twit-list-card.component.html',
  styleUrls: ['./twit-list-card.component.scss'],
})
export class TwitListCardComponent implements OnInit {
  @Input() tweet;
  @Output() like = new EventEmitter();
  @Output() Rtweet = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onLike(id: number) {
    this.like.emit(id);
  }

  onRetweet(id: number) {
    this.Rtweet.emit(id);
  }
}
