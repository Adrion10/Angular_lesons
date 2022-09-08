import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../Types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
