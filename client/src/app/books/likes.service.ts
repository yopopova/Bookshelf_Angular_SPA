import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.development';
import { Like } from '../types/like';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private http: HttpClient) {}

  likeBook(userId: string, bookId: string) {
    const { apiUrl } = environment;
    return this.http.post<Like>(`${apiUrl}/data/likes`, {userId, bookId});
  }

  getBookLikes(bookId: string) {
    const { apiUrl } = environment;
    const query = encodeURIComponent(`bookId="${bookId}"`);
    return this.http.get<Like[]>(`${apiUrl}/data/likes?select=userId&where=${query}`).pipe(map(x => x.map(y => y.userId)));
  }
}