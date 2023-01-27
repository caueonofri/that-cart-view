import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/helpers/products';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface dummyConfig {
products: Array<Product>,
total: number,
skip: number,
limit: number
}

// set http calls for:
// - get specific product
// - change procuct
// - insert product

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl:string = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<dummyConfig>(`${this.apiUrl}/products`);
  }



}
