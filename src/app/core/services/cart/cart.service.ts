import { Injectable } from '@angular/core';
import { Coupon, couponList } from 'src/helpers/couponcodes';
import { Product } from 'src/helpers/products';
import { LocalStorageService } from '../storage/localstorage.service';

export interface CartItem {
  product: Product,
  quantity: number,
}
export interface Cart {
  items: Array<CartItem>,
  couponCode?: string
}
export interface CartAmounts {
  total: number,
  subTotal: number,
  discount: number
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  get cart(): Cart {
    return this.LocalStorageService.fetch('cartContent');
  }
  get cartAmounts(): CartAmounts {
    return this.LocalStorageService.fetch('cartAmounts');
  }

  constructor(private LocalStorageService: LocalStorageService) {
    this._cartContent.items = this.cart.items || [];
  }
  _cartContent: Cart = this.cart;
  _cartAmounts: CartAmounts = this.cartAmounts;
  productList: Array<Product> = [];
  couponsList: Array<Coupon> = couponList;

  addToCart(product: Product): void {
    let foundIndex: number = -1;
    if (this.cart.items.length) {
      foundIndex = this.cart.items.findIndex(
        (a) => a.product.id == product.id
      );
      if (foundIndex >= 0) {
        this._cartContent.items[foundIndex].quantity++;
      }
    } else {
      this._cartContent.items.push({ product: product, quantity: 1 });
      this.updateCart(this._cartContent);
    }
  }

  removeFromCart(productId: number): void {
    this._cartContent.items = this._cartContent.items.filter(
      (a) => a.product.id != productId
    );
    this.updateCart(this._cartContent);
  }

  updateCart(cart: Cart): void {
    this.LocalStorageService.add('cartContent', JSON.stringify(cart));
    this.totalAmtUpdate();
    this.cartCount();
  }

  cartCount(): void {
    let count: number = 0;
    if (!this._cartContent.items.length) {
      this.LocalStorageService.add('cartCount', JSON.stringify(count));
    } else {
      this._cartContent.items.forEach((a) => (count = count + a.quantity));
      this.LocalStorageService.add('cartCount', JSON.stringify(count));
    }
  }

  totalAmtUpdate(couponCode?: string) {
    this.resetCartAmounts();
    if (!this.cart.items.length) {
      this._cartAmounts.subTotal = 0;
      this._cartAmounts.total = 0;
    } else {
      this._cartAmounts.subTotal = this.cart.items
        .map((item) => item.product.price * item.quantity)
        .reduce((prev, next) => prev + next);
      if (!couponCode || this._cartAmounts.total < 0) {
        this._cartAmounts.total = this._cartAmounts.subTotal;
      }
      if (couponCode) {
        this.applyDiscount(couponCode);
      }
    }
    this.LocalStorageService.add(
      'cartAmounts',
      JSON.stringify(this._cartAmounts)
    );
  }

  applyDiscount(couponCode: string) {
    console.log('apply discount');
    let couponChoice = this.couponsList.find((a) => a.id == couponCode);
    if (!couponCode) return;
    if (couponChoice) {
      if (couponChoice.isPercentage) {
        this._cartAmounts.total =
          this._cartAmounts.total * ((100 - couponChoice.amount) / 100);
      } else {
        this._cartAmounts.total = this._cartAmounts.total - couponChoice.amount;
      }
      this._cartAmounts.discount =
        this._cartAmounts.subTotal - this._cartAmounts.total;
    } else {
      alert('cupom inválido');
    }
  }

  resetCartAmounts() {
    this._cartAmounts = {
      total: 0,
      subTotal: 0,
      discount: 0,
    };
    this.LocalStorageService.remove('cartAmounts');
  }
}
