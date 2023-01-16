import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from 'src/helpers/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['../app.component.scss'],
})
export class AppCartComponent {
  private _cartContent:Array<product> = [];
  subTotal:number = 0;
  get cartContent():Array<product> {
    return this._cartContent;
  };

  constructor(private cartService:CartService) {
    this.cartService = cartService;
  }

  ngOnInit():void {
    this.cartService.cartContent$.subscribe({
      next: data => { this._cartContent.push(data)},
      // complete: () => {
      //   console.log(this.cartContent, 'cartcontent');
      //   this.subTotal = this.cartContent
      //     .map((item:product) => item.amount)
      //     .reduce((prev:number, next:number) => prev + next)
      // }
    });
  }

}
