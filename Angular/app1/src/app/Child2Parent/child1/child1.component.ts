import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() Omessage = new EventEmitter();
  @Output() Oobj= new EventEmitter();
  @Output() Ousers=new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }
  message = "Hello From Child1 Component";
  person = {
    fname:"Murali",
    lname:"krishna"
  }
  users = ["Murali","Ram","Ravi","Kumar"]

  sendMessage(){
    this.Omessage.emit(this.message)
    this.Oobj.emit(this.person)
    this.Ousers.emit(this.users)
  }
}
