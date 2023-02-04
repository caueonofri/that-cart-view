import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatBadgeModule} from '@angular/material/badge';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { AppCartComponent } from './pages/cart/app-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { AppHeaderComponent } from './shared/header/app-header.component';
import { AppProductListComponent } from './pages/product-list/app-product-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppProductListComponent,
    AppCartComponent,
    CheckoutComponent,
    FooterComponent,
    ProductDetailComponent,
    PagenotfoundComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatBadgeModule,
    MatMenuModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide:DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
