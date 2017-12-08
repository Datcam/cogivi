import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {

    if (localStorage.getItem('token')) {
      console.log('user is login');
      console.log(localStorage.getItem('token'));
      return true;
    }

    console.log('user is not login');

    this.router.navigate(['/login']);
    return false;
  }
}
