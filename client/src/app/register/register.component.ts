import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environmentBase as environment } from './../../environments/environment.base';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public month: Array<any> = new Array(12);
  public user: any = {};
  public birthday: Object = {};

  public date: Object = {
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  };

  constructor(
    private http: Http,
    private router: Router,
    private _registerService: RegisterService
  ) {
  }

  ngOnInit() {
    console.log('register is load: ', environment);
    console.log('token: ', localStorage.getItem('token'));
  }

  register() {
    console.log(this.user);

    this.user.birthday = this.birthday;

    this._registerService.register(this.user)
      .subscribe((res) => {
      console.log(res);
      this.router.navigate(['/confirm']);
      });

  }
}
