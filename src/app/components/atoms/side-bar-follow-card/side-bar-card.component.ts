import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-card',
  template:'<div><p>deneme<p><div>',
  templateUrl: './side-bar-card.component.html',
  styleUrls: ['./side-bar-card.component.scss']
})
export class SideBarFollowCardComponent implements OnInit {

  // users = [
  //   {name:'John', username:'jooohhy'},
  //   {name:'Anna', username:'blueanna'},
  //   {name:'Mike', username:'mickymike'}
  // ]

  constructor() { }

  ngOnInit(): void {
  }

}
