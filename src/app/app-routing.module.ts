import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MealDetailsComponent } from './pages/meal-details/meal-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MealsComponent } from './pages/meals/meals.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { ProductsComponent } from './pages/admin/products/products.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "meal-detail/:id",
    component: MealDetailsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: "menu", 
    component: MealsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {path: "products", component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
