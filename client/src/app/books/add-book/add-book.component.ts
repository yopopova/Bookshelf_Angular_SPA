import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addBook(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // console.log(form.value);

    const { title, cover, author, pages, price, description } = form.value;

    this.apiService.createBook(title, cover, author, pages, price, description).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }
}