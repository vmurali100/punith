import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  echangeMessage = new BehaviorSubject("")
  constructor() { }

  sendMessageFromService(msg){
    this.echangeMessage.next(msg)
  }
}
