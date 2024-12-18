import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Like } from 'src/app/types/like';
import { Book } from 'src/app/types/book';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book = {} as Book;
  bookLikes: string[] = [];
  isOwner: boolean = false;
  alreadyLiked: boolean = false;

  constructor(private apiService: ApiService, private userService: UserService, private likesService: LikesService, private router: Router, private activeRoute: ActivatedRoute) {}

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

      this.likesService.getBookLikes(id).subscribe((likes: string[]) => {
        // console.log(likes);
        this.bookLikes = likes;
        
        // this.bookLikes = likes.map(x => x.userId);
        // console.log(this.bookLikes);
      })
    });
  }

  deleteBook() {
    const bookId = this.book._id;

    this.apiService.removeBook(bookId).subscribe(() => {
      this.router.navigate(['/catalog']);
    });
  }

  likeBook() {
    const idUser = this.userService.user?._id;
    const idBook = this.book._id;

    if (idUser === this.book._ownerId) {
      return;
    }

    if (this.bookLikes.includes(idUser!)) {
      alert('You cannot like this book again.');
      this.alreadyLiked = true;
      return;
    }

    this.likesService.likeBook(idUser!, idBook).subscribe((like) => {
      alert('You like this book successfully!');
      // this.router.navigate([`/catalog/${idBook}`]);
      // console.log(like);
    });
  }

}