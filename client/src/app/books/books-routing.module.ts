import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
    {
      path: 'catalog',
      children: [
        { path: '', pathMatch: 'full', component: CatalogComponent },
        { path: ':bookId', component: BookDetailsComponent },
      ],
    },
    { path: 'add-book', component: AddBookComponent, canActivate: [AuthActivate] }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }