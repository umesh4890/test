import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const UsersRoutingModule: Routes = [
  { path: '', component: LoginComponent, data: { title: 'LoginComponent' } }
];


