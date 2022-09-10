import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
