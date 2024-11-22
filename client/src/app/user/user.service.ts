import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

import { UserForAuth } from '../types/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    console.log(this.user);
    
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  login(email: string, password: string) {
    const { apiUrl } = environment;

    return this.http.post<UserForAuth>(`${apiUrl}/users/login`, { email, password }).pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  };

  
}