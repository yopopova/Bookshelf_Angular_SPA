import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';

import { CatalogComponent } from './catalog/catalog.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CatalogComponent,
    AddBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    CatalogComponent,
    AddBookComponent
  ]
})
export class BooksModule { }
