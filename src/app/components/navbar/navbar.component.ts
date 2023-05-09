import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/static/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart: any;
  subscription: Subscription = new Subscription;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.currentCart.subscribe((cart) => {
      this.cart = cart;
    });
  }

}
