import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    latestBooks: Book[] = [];

    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.api.getLatest().subscribe(latestBooks => {
            // console.log(latestBooks);
            this.latestBooks = latestBooks;
        });
    }
}