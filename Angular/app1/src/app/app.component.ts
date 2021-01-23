import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app1';
  message="Hello Punit ... Welcome to Angular . from Class file";
  person ={
    fname:"Murali",
    lname:"Krishna"
  }
  personArray = Object.values(this.person)
  users = ["Ram","Ravi","Krishna","sam"]
  ngOnInit(){
    console.log(this)
  }
}
