import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../Types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  addToCart(): void {
    this.cartService.add(this.book);
  }
}
