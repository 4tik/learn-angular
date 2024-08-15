import { Routes } from '@angular/router';
import { LoginComponent } from './component/account/login/login.component';
import { RegistrationComponent } from './component/account/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: '**',
        component: LoginComponent,
    },
];

