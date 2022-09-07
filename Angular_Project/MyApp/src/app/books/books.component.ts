import { Component, OnInit } from '@angular/core';
interface Book {
  name: string;
  author: string;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
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
  // name: string = 'Clean Code';
  // author: string = 'Robert C Martin';
  // src: string =
  //   'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';

  // name2: string = 'The Pragmatic Programmer';
  // author2: string = 'David THomas';
  // src2: string = 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg';

  // isDisabled: boolean = false;
  isShowing: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  // handleClick() {
  //   // alert('I¸am working');
  //   this.isDisabled = true;
  // }
  // myName: string = '';
  // handleInput(event: any) {
  //   // alert('I am working');
  //   // console.log(event.target.value);
  //   this.myName = event.target.value;
  // }
  // toggleBooks() {
  //   // if isShowing is true, than make it false
  //   // or isShowing is false, then make it true

  //   this.isShowing = !this.isShowing;
  // }
  // ky funksion fshihet sepse e kemi zvenendesusar tek click isShowing
}
