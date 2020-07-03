import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-card',
  templateUrl: './follow-card.component.html',
  styleUrls: ['./follow-card.component.scss'],
})
export class FollowCardComponent implements OnInit {
  users = [
    { name: 'John', username: 'jooohhy' },
    { name: 'Anna', username: 'blueanna' },
    { name: 'Mike', username: 'mickymike' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
