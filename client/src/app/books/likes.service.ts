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
    let arr: string[] = [];
    const { apiUrl } = environment;
    const query = encodeURIComponent(`bookId="${bookId}"`);
    return this.http.get<Like[]>(`${apiUrl}/data/likes?select=userId&where=${query}`);
    
    // .pipe(
    //   tap((record) => {
    //     record.map(x => arr.push(x.userId)
    //     );
        
    //     // record.map(x => x.userId)
    //   })
    // )

    // return arr;

    // return this.http.get<Like[]>(`${apiUrl}/data/likes?select=_id?where=bookId="${bookId}"`);

    // NO
    // return this.http.get<Like[]>(`${apiUrl}/data/likes?where=bookId="${bookId}"`);
  }
}