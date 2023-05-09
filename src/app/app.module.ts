import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MealDetailsComponent } from './pages/meal-details/meal-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MealsComponent } from './pages/meals/meals.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/admin/login/login.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { ProductsComponent } from './pages/admin/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MealDetailsComponent,
    CartComponent,
    CheckoutComponent,
    MealsComponent,
    LoginComponent,
    OrdersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
