import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { User } from '../../model/user';
import { UserServices } from '../../services/user-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

   users: Array<User> = [];
  page = 1;
  perPage = 6;
  constructor(private userService: UserServices) { 
    
  }

  ngOnInit() {
    this.userService.getUsers(this.page, this.perPage).subscribe({
        next: (response) => {
          this.users = response.data; 
          console.log('Usuarios cargados', this.users);
          console.log('Total de páginas', response.total_pages);
        },
        error: (err) => {
          console.error('Error al cargar los usuarios', err);
        }
    });
    
    
  }

}
