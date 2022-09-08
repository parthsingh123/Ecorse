import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  username:string=null;
  ngOnInit() {
    this.username=    sessionStorage.getItem('emailid');
  }

}
