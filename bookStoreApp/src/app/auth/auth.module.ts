import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordsComponent } from './components/change-passwords/change-passwords.component';
import { AuthComponent } from './auth.component';
import {RouterOutlet} from "@angular/router";
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordsComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AuthRoutingModule
  ]
})
export class AuthModule { }
