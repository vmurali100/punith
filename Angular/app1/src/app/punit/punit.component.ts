import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

interface User { 
  fname: string; 
  lname: string; 
  tel: string; 
  address: string; 
  city: string; 
  state: string; 
  zip: number; 
}

@Component({
  selector: 'app-punit',
  templateUrl: './punit.component.html',
  styleUrls: ['./punit.component.css']
})
export class PunitComponent implements OnInit {
  allUsers: User[];

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }
  getUserDetails(){
    this.allUsers = this.commonService.getUsers()
  }
  convertObjArray(obj){
    return Object.values(obj)
  }
}
