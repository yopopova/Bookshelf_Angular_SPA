import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthActivate implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | boolean 
      | UrlTree
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree> {
        this.router.navigate(['login']);
        return this.userService.isLogged;
      }
}