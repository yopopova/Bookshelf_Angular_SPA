import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookCardComponent } from './book-card/book-card.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';

@NgModule({
  declarations: [
    BookCardComponent,
    EmailDirective,
    SlicePipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BookCardComponent,
    EmailDirective,
    SlicePipe,
  ]
})
export class SharedModule {}