import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { MachineryPage } from './pages/machinery/machinery';
import { UserDetail } from './pages/user-detail/user-detail';
import { MachineryDetail } from './pages/machinery-detail/machinery-detail';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home},
    { path: 'machinery', component: MachineryPage},
    { path: 'machinery/:id', component: MachineryDetail},
    { path: 'user/:id' , component: UserDetail}
];
