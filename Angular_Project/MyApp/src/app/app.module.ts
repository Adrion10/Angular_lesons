import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, BooksModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
