import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {RouterModule} from '@angular/router';
import {LOGIN_ROUTES} from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginModule { }
