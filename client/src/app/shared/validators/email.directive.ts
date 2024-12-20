import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    }
  ]
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = []; // 'appEmail' is the name of the directive, which we use into the HTML.
  
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null { 
    const validatorFn = emailValidator(this.appEmail);
    return validatorFn(control);
  }
}