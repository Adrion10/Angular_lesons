import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name: string = 'Clean Code';
  author: string = 'Robert C Martin';
  src: string =
    'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';

  name2: string = 'The Pragmatic Programmer';
  author2: string = 'David THomas';
  src2: string = 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg';

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
