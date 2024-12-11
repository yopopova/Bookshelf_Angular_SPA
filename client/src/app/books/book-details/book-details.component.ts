import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'src/app/types/book';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book = {} as Book;
  isOwner: boolean = false;

  constructor(private apiService: ApiService, private userService: UserService, private activeRoute: ActivatedRoute) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['bookId'];

      this.apiService.getSingleBook(id).subscribe((book: Book) => {
        this.book = book;

        if (this.userId === book._ownerId) {
          this.isOwner = true;
        }

        // console.log(this.userId);
        // console.log(book._ownerId);
      });
    });
  }

  // likeBook() {
  //   this.book.likes.push(this.userId);
  // }

  // dislikeBook() {
  //   let currentIdIndex = this.book.likes.indexOf(this.userId);
  //   this.book.likes.splice(currentIdIndex, 1);
  // }

  // isLiked(book: Book) {
  //   const isLikedUser = book.likes.find((like) => like === this.userService.user?._id);    
  //   return !!isLikedUser;
  // }
}