import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { AuthGuard } from '../authGuard/auth.guard';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyCogiviComponent } from './my-cogivi/my-cogivi.component';
import { CogiviDashboardComponent } from './cogivi-dashboard/cogivi-dashboard.component';
import { ContributeToComponent } from './contribute-to/contribute-to.component';
import { ContributeMemoryComponent } from './contribute-memory/contribute-memory.component';
import { ContributeAppComponent } from './contribute-app/contribute-app.component';
import { ContributeGratitudeComponent } from './contribute-gratitude/contribute-gratitude.component';
import { ContributePortraitComponent } from './contribute-portrait/contribute-portrait.component';
import { ContributePhotoComponent } from './contribute-photo/contribute-photo.component';
import { AllContributionsComponent } from './all-contributions/all-contributions.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { StartCogiviComponent } from './start-cogivi/start-cogivi.component';
import { StartCogivi2Component } from './start-cogivi2/start-cogivi2.component';
import { StartCogivi3Component } from './start-cogivi3/start-cogivi3.component';
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myCogivi', component: MyCogiviComponent, canActivate: [AuthGuard] },
  { path: 'cogiviDashboard', component: CogiviDashboardComponent, canActivate: [AuthGuard] },
  { path: 'contributeTo', component: ContributeToComponent, canActivate: [AuthGuard] },
  { path: 'contributeMemory', component: ContributeMemoryComponent, canActivate: [AuthGuard] },
  { path: 'contributeApp', component: ContributeAppComponent, canActivate: [AuthGuard] },
  { path: 'contributeGratitude', component: ContributeGratitudeComponent, canActivate: [AuthGuard] },
  { path: 'contributePortrait', component: ContributePortraitComponent, canActivate: [AuthGuard] },
  { path: 'contributePhoto', component: ContributePhotoComponent, canActivate: [AuthGuard] },
  { path: 'allContributions', component: AllContributionsComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'thankYou', component: ThankYouComponent, canActivate: [AuthGuard] },
  { path: 'startCogivi', component: StartCogiviComponent, canActivate: [AuthGuard] },
  { path: 'startCogivi2', component: StartCogivi2Component, canActivate: [AuthGuard] },
  { path: 'startCogivi3', component: StartCogivi3Component, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'confirm', component: ConfirmRegisterComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent,
    FaqComponent,
    ContactComponent,
    RegisterComponent,
    MyCogiviComponent,
    MyCogiviComponent,
    CogiviDashboardComponent,
    ContributeToComponent,
    ContributeMemoryComponent,
    ContributeAppComponent,
    ContributeGratitudeComponent,
    ContributePortraitComponent,
    ContributePhotoComponent,
    AllContributionsComponent,
    CheckoutComponent,
    ThankYouComponent,
    StartCogiviComponent,
    StartCogivi2Component,
    StartCogivi3Component,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes, config), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
