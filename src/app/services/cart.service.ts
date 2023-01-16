import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartContent$: Observable<any>;
  private cartSubject:Subject<any> = new Subject();

  constructor(){
    this.cartContent$ = this.cartSubject.asObservable();
  }

  public updateCart(data:any) {
    this.cartSubject.next(data);
  }
}
