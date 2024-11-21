import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    photo: ['', [Validators.required]],
    city: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      }, 
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      })
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { username, photo, city, email, passGroup: { password, rePassword } = {} } = this.form.value;

    this.userService.register(username!, photo!, city!, email!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}