import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productList, Product } from 'src/helpers/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class AppProductListComponent {
  productList: Array<Product> = productList;
  router: Router;

  constructor(public cartService:CartService, router: Router){
    this.cartService = cartService;
    this.router = router;
  }

  viewProductDetail(itemId:number) {
    this.router.navigate([`/item/${itemId}`]);
  }

  addToCart(productId: number):void {
    this.cartService.addToCart(productId);
  }

}
