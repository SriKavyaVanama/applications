import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { HomeModule } from '../home/home.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, LoginRoutingModule, HomeModule, HomeRoutingModule, RouterModule, MatFormFieldModule, MatIconModule
  ]
})
export class LoginModule { }
