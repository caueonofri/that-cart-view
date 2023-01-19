import { Component } from '@angular/core';
import { productList, Product } from 'src/helpers/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class AppProductListComponent {
  productList: Array<Product> = productList;

  constructor(public cartService:CartService){
    this.cartService = cartService;
  }

  addToCart(productId: number):void {
    this.cartService.addToCart(productId);
  }

}
