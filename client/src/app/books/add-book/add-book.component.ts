import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private apiService: ApiService) {}

  addBook(ev: Event, inputTitle: string, inputCover: string, inputAuthor: string, inputYear: string, inputPages: string, inputPrice: string, inputDescription: string) {
    ev.preventDefault();

    this.apiService.createBook(inputTitle, inputCover, inputAuthor, inputYear, inputPages, inputPrice, inputDescription).subscribe(data => {
      console.log(data);
    });
  }
}
