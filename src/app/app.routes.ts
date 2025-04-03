import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/user-management/add/add.component';
import { ListComponent } from './pages/user-management/list/list.component';
import { DetailComponent } from './pages/user-management/detail/detail.component';

export const routes: Routes = [
  { path: 'home', title: 'Home Page', component: HomeComponent },
  { path: 'login', title: 'Login Page', component: LoginComponent },
  { path: 'user-management',
    title: 'User Management Page',
    children: [
      {
        path: 'add',
        title: 'Add Employee Page',
        component: AddComponent,
      },
      {
        path: 'list',
        title: 'Employee Management List Page',
        component: ListComponent,
      },
      {
        path: 'detail',
        title: 'Employee Management Detail Page',
        component: DetailComponent,
      }
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `login`
];
