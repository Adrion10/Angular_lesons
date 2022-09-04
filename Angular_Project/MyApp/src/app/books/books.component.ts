import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name = 'Clean Code';
  author = 'Robert C Martin';
  constructor() {}

  ngOnInit(): void {}
}
