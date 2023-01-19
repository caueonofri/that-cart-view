import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppCartComponent } from './pages/cart/app-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { AppHeaderComponent } from './shared/header/app-header.component';
import { AppProductListComponent } from './pages/product-list/app-product-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppProductListComponent,
    AppCartComponent,
    CheckoutComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
