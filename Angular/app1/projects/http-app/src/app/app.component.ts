import { HttpServiceService } from './http-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-app';
  users :any =[]
  // Constructor can be consider as one of the lifecycle Hook of a component
  constructor(private _httpService:HttpServiceService){
    console.log("Cooking is in Progress")
  }

  ngOnInit(){
    setInterval(()=>{
      this._httpService.getDataFromApi().subscribe((res)=>{
        this._httpService.sendDataToUsers(res)
      })
    },2000)
  }
}
