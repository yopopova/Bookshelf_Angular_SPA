import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { ApiService } from 'src/app/api.service';
// import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  // constructor(private apiService: ApiService) {}

  addBook(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }
}