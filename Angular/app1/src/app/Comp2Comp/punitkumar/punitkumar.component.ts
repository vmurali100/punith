import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punitkumar',
  templateUrl: './punitkumar.component.html',
  styleUrls: ['./punitkumar.component.css']
})
export class PunitkumarComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }
  sendMoneyFromPunit(){
    this.commonService.sendMoneyFromService(5000)
  }
}
