import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/static/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: any;
subscription: Subscription = new Subscription;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.currentCart.subscribe((cart) => {
      this.cart = cart;
    });
  }

  getCartProduct() {
    
  }


  removeProduct(myproduct:any) {
    const t = this.cartService.getCart().filter((product: any) => product != myproduct );
    console.log(t);
    this.cartService.injectCart(t);    

    window.location.reload();
  }

}
