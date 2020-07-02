import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-user',
  templateUrl: './card-item-user.component.html',
  styleUrls: ['./card-item-user.component.scss']
})
export class CardItemUserComponent implements OnInit {

  @Input() user;
  constructor() {

   }

  ngOnInit(): void {
  }

}
