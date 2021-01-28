import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  message: string;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.echangeMessage.subscribe(res=>{
      // this.message = res
    })
  }

}
