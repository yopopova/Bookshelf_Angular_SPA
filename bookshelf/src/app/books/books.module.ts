import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

import { CatalogComponent } from './catalog/catalog.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    CatalogComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [
    CatalogComponent,
    AddBookComponent
  ]
})
export class BooksModule { }
