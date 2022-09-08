import { Injectable } from '@angular/core';
import { Book } from '../Types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<Book> = [];

  constructor() {}
  add(book: Book) {
    console.log(book);
    this.cart.push(book);
  }
  get() {
    return this.cart;
  }
  remove(book: Book) {
    return (this.cart = this.cart.filter((b) => b !== book));
  }
}
