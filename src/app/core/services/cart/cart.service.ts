import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coupon, couponList } from 'src/helpers/couponcodes';
import { Product, productList } from 'src/helpers/products';

export interface CartItem {
  product: Product,
  quantity: number
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
  get cartContent(): Array<CartItem> {
    return JSON.parse(localStorage.getItem('cartContent') || '');
  }
  get cartAmounts(): CartAmounts {
    return JSON.parse(localStorage.getItem('cartAmounts') || '');
  }
  _cartContent: Array<CartItem> = this.cartContent;
  _cartAmounts: CartAmounts = this.cartAmounts;
  productList: Array<Product> = productList;
  couponsList: Array<Coupon> = couponList;

  addToCart(productId:number):void {
    const item:Product = this.productList.filter(a => a.id == productId)[0];
    let foundIndex:number = this._cartContent.findIndex(a => a.product.id == productId);
    if(foundIndex >= 0) {
      this._cartContent[foundIndex].quantity++;
    } else {
      this._cartContent.push({product: item, quantity: 1});
    }
    this.updateCart(this._cartContent);
  }

  removeFromCart(productId:number):void {
    this._cartContent = this._cartContent.filter(a => a.product.id != productId);
    this.updateCart(this._cartContent);
  }

  updateCart(cart: Array<CartItem>): void{
    localStorage.setItem('cartContent', JSON.stringify(cart));
    this.cartCount();
  }

  cartCount():Observable<number>{
    let count:number = 0;
    if(!this._cartContent.length) {
      localStorage.setItem('cartCount', JSON.stringify(count));
      return of(0);
    }
    this._cartContent.forEach(a => count = count + a.quantity);
    localStorage.setItem('cartCount', JSON.stringify(count));
    return of(count);
  }

  getItems():Observable<Array<CartItem>> {
    return of(this.cartContent);
  }

   totalAmtUpdate(couponCode?: string) {
    if (!this.cartContent.length) {
      this._cartAmounts.subTotal = 0;
      this._cartAmounts.total = 0;
    } else {
      this._cartAmounts.subTotal = this.cartContent
        .map((item) => item.product.price * item.quantity)
        .reduce((prev, next) => prev + next);
      if (!couponCode || this._cartAmounts.total < 0) {
        this._cartAmounts.total = this._cartAmounts.subTotal;
      }
      if(couponCode) {
        this.applyDiscount(couponCode);
      }
    }
    localStorage.setItem('cartAmounts', JSON.stringify(this._cartAmounts));
  }

  applyDiscount(couponCode: string) {
    let couponChoice = this.couponsList.find((a) => a.id == couponCode);
    if(!couponCode) return;
    if (couponChoice) {
      if (couponChoice.isPercentage) {
        this._cartAmounts.total = this._cartAmounts.total * ((100 - couponChoice.amount) / 100);
      } else {
        this._cartAmounts.total = this._cartAmounts.total - couponChoice.amount;
      }
      this._cartAmounts.discount = this._cartAmounts.subTotal - this._cartAmounts.total;
    } else {
      alert('cupom inválido');
    }
  }

}
