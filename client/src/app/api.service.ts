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
    return this.http.get<Book[]>(`${apiUrl}/books`);
  }

  getLatest() {
    const { apiUrl } = environment;
    return this.http.get<Book[]>(`${apiUrl}/books?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
  }
}
