import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';
import { Coupon, couponList } from 'src/helpers/couponcodes';

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./../../app.component.scss'],
})
export class AppCartComponent implements OnInit, OnChanges{
  cartService: CartService;
  get cartContent(): Array<CartItem> { return JSON.parse(localStorage.getItem('cartContent') || ''); }
  cartDescription: Array<CartItem> = [];
  couponsList: Array<Coupon> = couponList;
  couponCode: string = '';
  discountAmt: number = 0;
  subTotalAmt: number = 0;
  totalAmt: number = 0;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }
  ngOnInit(): void {
    this.cartDescription = this.cartContent;
    this.totalAmtUpdate();
  }
  ngOnChanges(): void {
    this.totalAmtUpdate();
  }

  updateLocalCart(remove?: number) {
    if(remove != undefined && remove >= -1) {
      this.cartDescription.splice(remove, 1);
    }
    this.totalAmtUpdate();
    this.cartService.updateCart(this.cartDescription);
  }

   totalAmtUpdate() {
    if (!this.cartDescription.length) {
      this.subTotalAmt = 0;
      this.totalAmt = 0;
    } else {
      this.subTotalAmt = this.cartDescription
        .map((item) => item.product.amount * item.quantity)
        .reduce((prev, next) => prev + next);
      if (!this.couponCode || this.totalAmt < 0) {
        this.totalAmt = this.subTotalAmt;
      }
      this.applyDiscount();
    }
  }

  applyDiscount() {
    let couponChoice = this.couponsList.find((a) => a.id == this.couponCode);
    if(!this.couponCode) return;
    if (couponChoice) {
      if (couponChoice.isPercentage) {
        this.totalAmt = this.totalAmt * ((100 - couponChoice.amount) / 100);
      } else {
        this.totalAmt = this.totalAmt - couponChoice.amount;
      }
      this.discountAmt = this.subTotalAmt - this.totalAmt;
    } else {
      alert('cupom inválido');
    }
  }
}
