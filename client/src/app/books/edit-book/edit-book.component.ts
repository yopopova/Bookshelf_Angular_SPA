import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Book } from 'src/app/types/book';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book = {} as Book;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private activeRoute: ActivatedRoute) {}

  bookDetails = {
    _ownerId: '',
    title: '',
    cover: '',
    author: '',
    pages: '',
    price: '',
    description: '',
    _id: ''
  } as Book;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    cover: ['', [Validators.required]],
    author: ['', [Validators.required, Validators.minLength(3)]],
    pages: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['bookId'];

      this.apiService.getSingleBook(id).subscribe((book: Book) => {
        this.book = book;
        // console.log(this.book.title);

        const { _id, title, cover, author, pages, price, description } = this.book;
        // console.log(price);
        
        this.form.setValue({
          title,
          cover,
          author,
          pages,
          price,
          description
        });

      })
    })
  }

  editBook() {
    if (this.form.invalid) {
      return;
    }

    const bookId = this.book._id;
    const { title, cover, author, pages, price, description } = this.form.value;
    // console.log(this.form.value);

    this.apiService.updateBook(bookId, title!, cover!, author!, pages!, price!, description!).subscribe(() => {
      this.router.navigate([`/catalog/${bookId}`]);
    });
  }
}