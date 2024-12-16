import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';

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
    // console.log(this.user?.accessToken);
    return !!this.user;
  }

  // console.log(this.user);
  
  constructor(private http: HttpClient) {
    // try {
    //   const lsUser = localStorage.getItem(this.USER_KEY) || '';
    //   this.user = JSON.parse(lsUser);
    // } catch (error) {
    //   this.user = undefined;
    // }

    this.userSubscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  login(email: string, password: string) {
    const { apiUrl } = environment;
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

    return this.http.post<UserForAuth>(`${apiUrl}/users/login`, { email, password }).pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  };

  register(username: string, photo: string, city: string, email: string, password: string, rePassword: string) {
    const { apiUrl } = environment;
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));


    return this.http.post<UserForAuth>(`${apiUrl}/users/register`, { username, photo, city, email, password, rePassword }).pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }

  logout() {
    const { apiUrl } = environment;
    // localStorage.clear();
    // this.user = undefined;
    // localStorage.removeItem(this.USER_KEY);

    return this.http.post(`${apiUrl}/users/logout`, {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  // TO CHECK THIS FUNCTIONALITY !!!
  getProfile() {
    const { apiUrl } = environment;
    // const userId = this.user?._id;
    // console.log(this.user?._id);
    const token = this.user?.accessToken;
    
    // return this.user$;
    // return this.http.get<UserForAuth>(`${apiUrl}/users/${this.user?._id}`).pipe(tap(user => this.user$$.next(user)));
    // return this.http.get<UserForAuth>(`${apiUrl}/users/me`).pipe(tap(user => this.user$$.next(user)));

    return this.http.get<UserForAuth>(`${apiUrl}/users/me`).pipe(tap(user => this.user$$.next(user)));
  }

  get getToken() {
    return this.user?.accessToken;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}