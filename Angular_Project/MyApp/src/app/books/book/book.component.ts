import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { Book } from '../../Types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  // myInterval: any = null;

  constructor() {}

  ngOnInit(): void {
    // this.myInterval = setInterval(() => {
    //   console.log('Hello');
    // }, 1000);
  }
  ngOnDestroy(): void {
    // clearInterval(this.myInterval);
    // console.log({ onDestroy: 'onDestroy' });
  }

  addToCart() {
    this.bookEmitter.emit(this.book);
  }
}
