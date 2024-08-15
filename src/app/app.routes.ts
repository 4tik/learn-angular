import { Routes } from '@angular/router';
import { LoginComponent } from './component/account/login/login.component';
import { RegistrationComponent } from './component/account/registration/registration.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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

