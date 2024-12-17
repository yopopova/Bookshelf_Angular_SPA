import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../guards/auth.activate';
import { UnauthActivate } from '../guards/unauth.activate';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AuthActivate] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthActivate] },
    { path: 'profile', component: ProfileComponent, canActivate: [UnauthActivate] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}