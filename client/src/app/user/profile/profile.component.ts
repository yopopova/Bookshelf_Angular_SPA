import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { ApiService } from 'src/app/api.service';
import { ProfileDetails } from 'src/app/types/user';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  books: Book[] = [];
  currentUserBooks: Book[] = [];

  profileDetails: ProfileDetails = {
    _id: '',
    username: '',
    photo: '',
    city: '',
    email: '',
  };

  constructor(private userService: UserService, private apiService: ApiService) {}

  ngOnInit(): void {
    const { _id, username, photo, city, email } = this.userService.user!;

    this.profileDetails = {
      _id,
      username,
      photo,
      city,
      email,
    }

    this.apiService.getAllBooks().subscribe(books => {
      this.books = books;
      this.currentUserBooks = this.books.filter((bookRecord) => bookRecord._ownerId === _id);
    });
  }
  
}