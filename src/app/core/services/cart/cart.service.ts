import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, productList } from 'src/helpers/products';

export interface CartItem {
  product: Product,
  quantity: number
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  get cartContent(): Array<CartItem> {
    return JSON.parse(localStorage.getItem('cartContent') || '');
  }
  innerCart: Array<CartItem> = this.cartContent;
  productList: Array<Product> = productList;

  addToCart(productId:number):void {
    const item:Product = this.productList.filter(a => a.id == productId)[0];
    let foundIndex:number = this.innerCart.findIndex(a => a.product.id == productId);
    if(foundIndex >= 0) {
      this.innerCart[foundIndex].quantity++;
    } else {
      this.innerCart.push({product: item, quantity: 1});
    }
    this.updateCart(this.innerCart);
  }

  removeFromCart(productId:number):void {
    this.innerCart = this.innerCart.filter(a => a.product.id != productId);
    this.updateCart(this.innerCart);
  }

  updateCart(cart: Array<CartItem>): void{
    localStorage.setItem('cartContent', JSON.stringify(cart));
    this.cartCount();
  }

  cartCount():Observable<number>{
    let count:number = 0;
    if(!this.innerCart.length) {
      localStorage.setItem('cartCount', JSON.stringify(count));
      return of(0);
    }
    this.innerCart.forEach(a => count = count + a.quantity);
    localStorage.setItem('cartCount', JSON.stringify(count));
    return of(count);
  }

  getItems():Observable<Array<CartItem>> {
    return of(this.cartContent);
  }

}
