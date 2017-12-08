import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ServerUrlInterceptor } from '../interceptors/server-url.interceptor';

import { AppComponent }          from './app.component';
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component';
import {AuthGuard} from "../authGuard/auth.guard";
import { HeaderComponent } from './header/header.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './register.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ConfirmRegisterComponent,
    HeaderComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerUrlInterceptor,
      multi: true
    },
    AuthGuard,
    LoginService,
    RegisterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(private _loginService: LoginService) {
    this._loginService.init();
  }
}
