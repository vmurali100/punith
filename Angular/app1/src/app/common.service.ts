import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  echangeMessage = new BehaviorSubject(0)
  money = new BehaviorSubject("")
  constructor() { }

  sendMessageFromService(msg){
    this.echangeMessage.next(msg)
  }
  sendMoneyFromService(m){
    this.money.next(m)
  }
  getUsers (){
    return [
      {
          "fname": "Ann",
          "lname": "User",
          "tel": "(967)402-2575",
          "address": "3914 Malesuada Ln",
          "city": "Gettysburg",
          "state": "CA",
          "zip": 97644
      },
      {
          "fname": "Staci",
          "lname": "Murphy",
          "tel": "(120)089-9351",
          "address": "2297 Velit Rd",
          "city": "Pawleys Island",
          "state": "WI",
          "zip": 43096
      },
      {
          "fname": "Nerissa",
          "lname": "Meow",
          "tel": "(783)240-8311",
          "address": "9573 Tempor Ct",
          "city": "Fresno",
          "state": "MD",
          "zip": 43614
      },
      {
          "fname": "Karla",
          "lname": "Walters",
          "tel": "(426)361-3194",
          "address": "6984 Tellus Dr",
          "city": "Evanston",
          "state": "UT",
          "zip": 74267
      },
      {
          "fname": "Eamon",
          "lname": "Reinhardt",
          "tel": "(604)705-5903",
          "address": "3556 Augue Ct",
          "city": "Woonsocket",
          "state": "AK",
          "zip": 22883
      }]
    // return [12,12,23,345,876]
  }
}
