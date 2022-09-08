import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { Book } from '../Types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log({ onDestroy: 'onDestroy' });
  }

  addToCard() {
    this.bookEmitter.emit(this.book);
  }
}
