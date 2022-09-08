import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image:
          'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 40,
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'David THomas',
        image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
        amount: 35,
      },
      {
        name: 'Clean code JavaScript',
        author: 'James Padolsey ',
        image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
        amount: 37,
      },
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image:
          'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 40,
      },
    ];
  }
}
