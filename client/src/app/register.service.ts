import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  register (userData: any) {
    console.log(userData);
    return this.http.post('/signUp', userData);
  }

}
