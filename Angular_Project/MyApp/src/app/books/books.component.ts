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
  constructor() {}

  ngOnInit(): void {}
}
