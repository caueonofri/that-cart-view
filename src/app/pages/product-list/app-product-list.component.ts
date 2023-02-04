import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/helpers/products';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./../../app.component.scss']
})

export class AppProductListComponent {
  productList: Array<Product> = [];
  category: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public cartService: CartService,
    public productsService: ProductsService
  ){
    this.route.params.subscribe(
      {
        next: params => {this.category = params['category']}
      }
    )
    this.router.events.subscribe(ev => {
      if(ev instanceof NavigationEnd) {
        this.populateProducts();
      }
    })
  }

  populateProducts() {
    this.productsService.getProducts(this.category)
      .subscribe(
        {
          next: res => this.productList = res,
          error: err => console.error(err)
        }
      );
  }

  viewProductDetail(itemId:number) {
    this.router.navigate([`/item/${itemId}`]);
  }

  addToCart(product: Product):void {
    this.cartService.addToCart(product);
  }

}
