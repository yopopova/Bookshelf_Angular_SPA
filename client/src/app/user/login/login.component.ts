import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    // console.log(form.value); // This shows form input names with their values.

    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}