import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
  displayVal='';
  name = 'peter';
  disable = false;
  show = 'yes';
  color = 'orange';
  bgColor = 'red';
  users=['Prashant', 'Suraj', 'Swapnil', 'Gautam', 'Mayank'];
  userDetails=[
    {name:'Prashant', email: 'prashant@test.com', phone: '9876543210', socialAccounts: ['facebook', 'insta', 'gmail']},
    {name:'Suraj', email: 'suraj@test.com', phone: '9567843210', socialAccounts: ['twitter', 'linkedIn', 'gmail']},
    {name:'Swapnil', email: 'swapnil@test.com', phone: '9876654350', socialAccounts: ['insta', 'gmail', 'yahoo']},
    {name:'Gautam', email: 'gautam@test.com', phone: '9877654210', socialAccounts: ['linkedIn', 'facebook', 'twitter']},
    {name:'Mayank', email: 'mayank@test.com', phone: '9877654210', socialAccounts: ['gmail', 'twitter', 'linkedIn']},
  ];

  getData(val:string){
    console.warn(val);
  }

  getValue(val:string){
    console.warn(val);
    this.displayVal = val;
  }

  updateColor(){
    this.color = 'blue';
    this.bgColor = 'green'
  }
}
