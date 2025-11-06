import { Component } from '@angular/core';
import { Login } from '../../model/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginPage {
  login: Login = new Login('', '', '');
  verifyLogin(){
    return this.login
  }
}
