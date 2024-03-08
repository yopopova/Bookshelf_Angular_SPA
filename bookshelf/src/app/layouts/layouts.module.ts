import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddBookComponent } from './add-book/add-book.component';


@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    ContactsComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CatalogComponent,
    ContactsComponent,
    AddBookComponent
  ]
})
export class LayoutsModule { }
