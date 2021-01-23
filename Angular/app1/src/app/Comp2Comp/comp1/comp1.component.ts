import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  messageFromComp1 = "Welcome Sibling Component Communications"
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.commonService.sendMessageFromService(this.messageFromComp1)
  }
}
