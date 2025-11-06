import { Component } from '@angular/core';
import { Login } from '../../model/login';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginServices } from '../../services/login-services';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginPage {
  constructor(private router: Router, private loginservice:LoginServices) { }
  login: Login = new Login('', '', '');
  
  verifyLogin(){
    this.login.email = "test@test.com"
    this.loginservice.login(this.login).subscribe({
      next: (response) => {
        console.log('Total de páginas', response);
        this.router.navigate(["/home"])
      },
      error: (err) => {
        console.error('Error al cargar los usuarios', err);
      }
    });
    return this.login
  }
}
