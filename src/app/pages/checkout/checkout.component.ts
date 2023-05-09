import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/static/cart.service';
import {NgForm} from '@angular/forms';
import { OrdersService } from 'src/app/services/static/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: any;
  subscription: Subscription = new Subscription;
  total: any;
  state = {
    loading: false,
    error: false,
    success: false
  };

  constructor(private cartService: CartService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.currentCart.subscribe((cart) => {
      this.cart = cart;
      this.total = this.calculTotal(cart)
    });
  }


  calculTotal(cart:any) {
    let t = 0;
    for (let i = 0; i < cart.length; i++) {
      t += cart[i].price * cart[i].quantity;      
    }
    return t;
  }


  onSubmit(f: NgForm) {
    console.log(f.valid);  // false

    this.state.loading = true;
    this.state.error = false;

    if (f.valid) {

      console.log(f.value);  // { first: '', last: '' }
      const data = {
        checkout_info: f.value,
        carts: this.cart
      };

      this.orderService.setOrders(data);

      setTimeout(() => {
        this.state.loading = false;
        this.state.success = true;
        this.emptyAll();
      }, 1000);
      
    } else {
      this.state.error = true;
      this.state.loading = false;
    }
  }


  emptyAll() {
    this.cartService.injectCart([]);
    window.location.href = "/";
  }

}
