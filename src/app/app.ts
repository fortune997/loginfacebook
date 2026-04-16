import { Component } from '@angular/core';
import {  LoginForm } from './login-form/login-form';
import {  LoginLeft } from './login-left/login-left';
import {Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginLeft, LoginForm, Footer, FormsModule],
  templateUrl: './app.html',
})
export class App {}
