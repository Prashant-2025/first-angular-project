import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData:any={};

  constructor() { }

  ngOnInit(): void {
  }

  getData(data: NgForm){
    console.warn(data);
    this.userData = data;
  }

}
