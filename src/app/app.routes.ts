import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
