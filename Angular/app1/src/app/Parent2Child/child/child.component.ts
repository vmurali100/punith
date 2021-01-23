import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // We are going receive some value in 'msg' variable
  @Input() msg ;
  @Input() obj;
  @Input() arr;
  constructor() { }

  ngOnInit(): void {
  }

}
