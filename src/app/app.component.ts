import { Component } from '@angular/core';
import { coupon, couponList } from 'src/helpers/couponcodes';
import { productList, product } from 'src/helpers/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cartContent: Array<product> = [];
  productList: Array<product> = productList;
  couponsList: Array<coupon> = couponList;
  couponCode: string = '';
  subTotal: number = 0;

  updateCart(productId: number, add: boolean): void {
    if (!add) {
      this.cartContent = this.cartContent.filter((a) => a.id != productId);
      this.subTotalUpdate();
    } else {
      let chosenProduct = this.productList.find((a) => a.id == productId);
      if (chosenProduct) {
        this.cartContent.push(chosenProduct);
        this.subTotalUpdate();
      } else {
        console.error('not a known product');
      }
    }
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
