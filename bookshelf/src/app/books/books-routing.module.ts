import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
    {path: 'catalog', component: CatalogComponent},
    {path: 'add-book', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }