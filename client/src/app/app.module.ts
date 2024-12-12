import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CoreModule } from './core/core.module';
import { LayoutsModule } from './layouts/layouts.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { authInterceptorProvider } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutsModule,
    BooksModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [appInterceptorProvider, authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}