import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muralikrishna',
  templateUrl: './muralikrishna.component.html',
  styleUrls: ['./muralikrishna.component.css']
})
export class MuralikrishnaComponent implements OnInit {
  receivedMoney: any;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.money.subscribe(res=>{
      this.receivedMoney = res;   
    })
  }


}
