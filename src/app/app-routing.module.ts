import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppProductListComponent } from './pages/product-list/app-product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AppCartComponent } from './pages/cart/app-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: AppProductListComponent},
  { path: 'item/:id', component: ProductDetailComponent},
  { path: 'carrinho', component: AppCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: CheckoutComponent, canActivate: [false]},
  { path: '**', component: PagenotfoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  isAdminUser: boolean = false;
  //create login logic and route to admin page
 }
