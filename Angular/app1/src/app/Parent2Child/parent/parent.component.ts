import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = "Hello From Parent Component";
  person = {
    fname:"Murali",
    lname:"krishna"
  }
  users = ["Murali","Ram","Ravi","Kumar"]
  constructor() { }

  ngOnInit(): void {
  }

}
