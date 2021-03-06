import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (private router: Router) {}

  public logIn = false;

  ngOnInit() {

    const token = localStorage.getItem('token');

    if (token) {
      this.logIn = true;
    } else if (!token) {
      this.logIn = false;
    }
  }
}
