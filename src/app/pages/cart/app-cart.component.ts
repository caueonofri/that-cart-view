import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CartAmounts, CartItem, CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./../../app.component.scss'],
})
export class AppCartComponent implements OnInit {
  get cartContent(): Array<CartItem> { return JSON.parse(localStorage.getItem('cartContent') || '[]'); }
  get cartAmounts(): CartAmounts { return JSON.parse(localStorage.getItem('cartAmounts') || '{}')}
  _cartContent: Cart = { items: this.cartContent, couponCode: ''};
  couponCode: string = '';

  constructor(
    private cartService: CartService,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this.cartService.totalAmtUpdate();
  }
  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
    this._cartContent.items = this.cartContent;
  }

  updateLocalCart() {
    this._cartContent.couponCode = this.couponCode ? this.couponCode : '';
    this.cartService.updateCart(this._cartContent);
  }

  confirmCheckout() {
    this._router.navigate(['/checkout']);
  }

}
