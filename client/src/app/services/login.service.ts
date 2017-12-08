import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginService {

  token: String;
  user: any;


  isLogin: Boolean = false;
  userLogin: any = localStorage.getItem('token');


  constructor(private http: HttpClient, private router: Router) { }

  init () {
    console.log('start login service');
    if (this.userLogin) {
        this.isLogin = true;
    }
  }


  login (data: any) {
    this.http.post('/login', data, {observe: 'response'})
      .subscribe((res) => {
        const token = res.headers.get('Authorization');
        localStorage.setItem('token', token);
        this.router.navigate(['/myCogivi']);
        this.isLogin = true;
      }, (err: HttpErrorResponse) => {
        this.isLogin = false;
        console.log(err.error);
      })
  }

  logOut () {
    this.isLogin = false;
    this.token = '';
  }
}
