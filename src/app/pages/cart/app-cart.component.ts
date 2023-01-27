import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartAmounts, CartItem, CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./../../app.component.scss'],
})
export class AppCartComponent implements OnInit, OnChanges{
  get cartContent(): Array<CartItem> { return JSON.parse(localStorage.getItem('cartContent') || ''); }
  get cartAmounts(): CartAmounts { return JSON.parse(localStorage.getItem('cartAmounts') || '')}
  cartDescription: Array<CartItem> = [];
  couponCode: string = '';

  constructor(
    private cartService: CartService,
    private _router: Router
    ) {}
  ngOnInit(): void {
    this.cartDescription = this.cartContent;
    this.cartService.totalAmtUpdate();
  }
  ngOnChanges(): void {
    this.cartService.totalAmtUpdate(this.couponCode);
  }

  updateLocalCart(remove?: number) {
    if(remove != undefined && remove >= -1) {
      this.cartDescription.splice(remove, 1);
    }
    this.cartService.totalAmtUpdate(this.couponCode);
    this.cartService.updateCart(this.cartDescription);
  }

  confirmCheckout() {
    this._router.navigate(['/checkout']);
  }

}
