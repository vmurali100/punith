import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  sendInfo= new BehaviorSubject("") // An Instance of Bevahior subject Class
  url="http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
  constructor(private _http:HttpClient) { }
  
  getDataFromApi(){
   return this._http.get(this.url)
  }

 // A funtion which receive data and Trigger to the Subscribed Component with instance of BS
  sendDataToUsers(data){
    this.sendInfo.next(data)
  }
}
