import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProfileDetails } from 'src/app/types/user';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'Ivan',
    photo: 'link',
    city: 'Vidin',
    email: 'ivan@gmail.com',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    photo: ['', [Validators.required]],
    city: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
  });

  constructor(private fb: FormBuilder) {}

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    this.onToggle();
  }
}
