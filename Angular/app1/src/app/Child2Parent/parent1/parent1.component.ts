import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  msg
  rObj: any;
  rUsers: any;
  constructor() { }

  ngOnInit(): void {
  }

  receiveObj(obj){
    this.rObj = obj
  }

  getMessage(message){
    console.log(message)
    this.msg = message
  }

  receiveUsers(users){
    this.rUsers = users
  }
}
