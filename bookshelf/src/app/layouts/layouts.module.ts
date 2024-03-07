import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatalogComponent } from './catalog/catalog.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent
  ]
})
export class LayoutsModule { }
