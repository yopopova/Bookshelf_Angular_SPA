import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class LayoutsModule { }
