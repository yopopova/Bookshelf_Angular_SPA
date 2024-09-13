import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

import { CatalogComponent } from './catalog/catalog.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CatalogComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  exports: [
    CatalogComponent,
    AddBookComponent
  ]
})
export class BooksModule { }
