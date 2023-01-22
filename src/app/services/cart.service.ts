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
  cartContent: Array<CartItem> = [];
  productList: Array<Product> = productList;

  addToCart(productId:number):void {
    const item:Product = this.productList.filter(a => a.id == productId)[0];
    let foundIndex:number = this.cartContent.findIndex(a => a.product.id == productId);
    if(foundIndex >= 0) {
      this.cartContent[foundIndex].quantity++;
    } else {
      this.cartContent.push({product: item, quantity: 1});
    }
    localStorage.setItem('cartContent', JSON.stringify(this.cartContent));
    this.cartCount();
  }

  removeFromCart(productId:number):void {
    this.cartContent = this.cartContent.filter(a => a.product.id != productId);
    this.cartCount();
  }

  cartCount():Observable<number>{
    let count:number = 0;
    this.cartContent.forEach(a => count = count + a.quantity);
    localStorage.setItem('cartCount', JSON.stringify(count));
    return of(count);
  }

  getItems():Observable<Array<CartItem>> {
    return of(this.cartContent);
  }

}
