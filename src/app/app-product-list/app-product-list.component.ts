import { Component, EventEmitter, Output } from '@angular/core';
import { productList, product } from 'src/helpers/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['../app.component.scss']
})
export class AppProductListComponent {
  productList: Array<product> = productList;

  constructor(public cartService:CartService){
    this.cartService = cartService;
  }

  addToCart(productId: number):void {
    this.cartService.updateCart(this.productList.filter(a => a.id == productId));
  }
}
