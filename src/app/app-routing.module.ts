import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppProductListComponent } from './pages/product-list/app-product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AppCartComponent } from './pages/cart/app-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'produtos', component: AppProductListComponent},
  { path: 'item/:id', component: ProductDetailComponent},
  { path: 'carrinho', component: AppCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: '**', component: PagenotfoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
