import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
password: any;
email: any;
onLogin() {
throw new Error('Method not implemented.');
}
onCreateAccount() {
throw new Error('Method not implemented.');
}

}
