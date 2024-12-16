import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    books: Book[] = [];

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.api.getAllBooks().subscribe(books => {
            // console.log(books);
            this.books = books;
        });
    }
}
