import { HttpServiceService } from './../http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[]
  constructor(private httpService:HttpServiceService) { }

  ngOnInit(): void {
    this.httpService.sendInfo.subscribe(res=>{
      this.users=res
    })
  }

}
