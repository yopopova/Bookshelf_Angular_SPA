import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  exports: [
    HomeComponent,
    ContactsComponent
  ]
})
export class LayoutsModule { }
