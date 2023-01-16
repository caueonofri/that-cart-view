import { Component, EventEmitter, Output } from '@angular/core';
import { productList, product } from 'src/helpers/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['../app.component.scss']
})
export class AppProductListComponent {
  productList: Array<product> = productList;
  @Output()cartAdd:EventEmitter<number> = new EventEmitter();


  addToCart(productId: number):void {
    this.cartAdd.emit(productId);
  }
}
