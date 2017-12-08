import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environmentBase as invironment } from './../../environments/environment.base';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    console.log('login components is load');
  }

  login(){
    this.loginService.login(this.user);
  }

}
