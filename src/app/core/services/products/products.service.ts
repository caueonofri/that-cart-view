import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/helpers/products';
import { map } from 'rxjs/operators';

interface dummyConfig {
products: Array<Product>,
total: number,
skip: number,
limit: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl:string = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts(category?: string) {
    return this.http.get<dummyConfig>(`${this.apiUrl}/products`)
        .pipe(
          map(response =>
          response.products.filter(
            product => category ? product.category == category : product
            )
          )
        );
  }

  getProductsCategories() {
    return this.http.get(`${this.apiUrl}/products/categories`);
  }

}
