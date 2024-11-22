import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserForAuth } from '../types/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, password: string) {
    const { apiUrl } = environment;
    return this.http.post<UserForAuth>(`${apiUrl}/users/login`, { email, password });
  };

  register(username: string, photo: string, city: string, email: string, password: string, rePassword: string) {
    const { apiUrl } = environment;
    return this.http.post<UserForAuth>(`${apiUrl}/users/register`, { username, photo, city, email, password, rePassword });
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}