import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ContactsComponent,
    LoginComponent
  ]
})
export class LayoutsModule { }
