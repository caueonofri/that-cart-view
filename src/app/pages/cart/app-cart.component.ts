import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Coupon, couponList } from 'src/helpers/couponcodes';
import { Product } from 'src/helpers/products';

// to do:
// - add images to products

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./../../app.component.scss'],
})
export class AppCartComponent {
  cartService: CartService;
  cartContent: Array<Product> = [];
  couponsList: Array<Coupon> = couponList;
  couponCode: string = '';
  subTotal: number = 0;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  removeFromCart(productId:number){
    if(!productId) return;
    this.cartService.removeFromCart(productId);
  }

  applyDiscount() {
    if (!this.couponCode || this.subTotal < 0) return;
    let couponChoice = this.couponsList.find((a) => a.id == this.couponCode);
    if (couponChoice) {
      if (couponChoice.isPercentage) {
        this.subTotal = this.subTotal * ((100 - couponChoice.amount) / 100);
      } else {
        this.subTotal = this.subTotal - couponChoice.amount;
      }
    } else {
      alert('cupom inválido');
    }
  }

  subTotalUpdate() {
    if (!this.cartContent.length) {
      this.subTotal = 0;
    } else {
      this.subTotal = this.cartContent
        .map((item) => item.amount)
        .reduce((prev, next) => prev + next);
      this.applyDiscount();
    }
  }
}
