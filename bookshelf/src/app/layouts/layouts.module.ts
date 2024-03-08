import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CatalogComponent,
    ContactsComponent
  ]
})
export class LayoutsModule { }
