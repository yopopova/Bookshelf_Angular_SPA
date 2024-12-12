import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';

import { CatalogComponent } from './catalog/catalog.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    CatalogComponent,
    AddBookComponent,
    BookDetailsComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    UserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CatalogComponent,
    AddBookComponent
  ]
})
export class BooksModule {}