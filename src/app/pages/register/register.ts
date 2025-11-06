import { Component } from '@angular/core';
import { LoginServices } from '../../services/login-services';
import { Login } from '../../model/login';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  login: Login = new Login('', '', '');
   

    constructor(private registerServices : LoginServices, private router: Router){}

    register(){
      console.log(this.login)

    }

    gobacktologin(){
      this.router.navigate(["/login"])
    }
}
