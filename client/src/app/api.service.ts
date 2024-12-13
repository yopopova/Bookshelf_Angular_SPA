import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';
import { Book } from './types/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllBooks() {
    const { apiUrl } = environment;
    return this.http.get<Book[]>(`${apiUrl}/data/books`);
  }

  getLatest() {
    const { apiUrl } = environment;
    return this.http.get<Book[]>(`${apiUrl}/data/books?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
  }

  getSingleBook(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Book>(`${apiUrl}/data/books/${id}`);
  }

  createBook(title: string, cover: string, author: string, pages: string, price: string, description: string) {
    const { apiUrl } = environment;

    const payload = {
      title,
      cover,
      author,
      pages,
      price,
      description
    }

    return this.http.post<Book>(`${apiUrl}/data/books`, payload);
  }

  updateBook(id: string, title: string, cover: string, author: string, pages: string, price: string, description: string) {
    const { apiUrl } = environment;

    const payload = {
      title,
      cover,
      author,
      pages,
      price,
      description
    }

    return this.http.put<Book>(`${apiUrl}/data/books/${id}`, payload);
  }

  removeBook(id: string) {
    const { apiUrl } = environment;
    return this.http.delete<Book>(`${apiUrl}/data/books/${id}`);
  }

}