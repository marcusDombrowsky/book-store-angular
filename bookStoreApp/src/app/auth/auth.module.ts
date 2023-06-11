import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordsComponent } from './components/change-passwords/change-passwords.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
