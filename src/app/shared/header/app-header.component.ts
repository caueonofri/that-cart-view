import { Component } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class AppHeaderComponent {
  get cartCount() { return JSON.parse(localStorage.getItem('cartCount') || '0')}
  categories: any = [];

  constructor(private productsService:ProductsService) {
    this.productsService.getProductsCategories().subscribe( {
      next: res => {this.categories  = res}
    });
  }

}
