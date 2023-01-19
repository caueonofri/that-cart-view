import { Injectable } from '@angular/core';
import { Product, productList } from 'src/helpers/products';

interface CartItem {
  product: Product,
  quantity: number
}

// to do:
// - add quantity functionality to cart items
// - add

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartContent:Array<CartItem> = [];
  productList: Array<Product> = productList;

  addToCart(productId:number):void {
    const item:Product = this.productList.filter(a => a.id == productId)[0];
    this.cartContent.push({product: item, quantity: 1});
  }

  removeFromCart(productId:number):void {
    this.cartContent = this.cartContent.filter(a => a.product.id != productId);
  }

  getItems():Array<CartItem> {
    return this.cartContent;
  }

  updateQuantity(productId:number, increase:boolean):void {
    const itemIndex = this.cartContent.findIndex(a => a.product.id == productId);
    if(increase) {
      this.cartContent[itemIndex].quantity++
    } else {
      this.cartContent[itemIndex].quantity--
    }
    console.log(`${this.cartContent[itemIndex]}`);
  }

}
