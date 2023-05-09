import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject(<any>[]);
  currentCart = this.cart.asObservable();
  total:Number = 0;

  constructor() {
    const ls = localStorage.getItem("cart");
    if (ls) {
      const cartStorage = JSON.parse(ls);
      console.log(cartStorage);        
      this.cart.next(cartStorage);
    } 

   }

   addToCart(article:any) {
    const updatedValue = [...this.cart.value, article];
    this.cart.next(updatedValue);

    this.setInStorage();
  }

  injectCart(newCart:any) {
    this.cart.next(newCart);

    this.setInStorage();
  }

  getCart() {
    return this.cart.value;    
  }

  getTotalAccount() {
    const c = this.getCart();
    let t = 0;
    for (let i = 0; i < c.length; i++) {
      t += c[i].price;      
    }

    return t;
    
  }

  setInStorage() {
    const c = this.getCart();
    localStorage.setItem('cart', JSON.stringify(c));
  }


  VerifyInCart(product:any) {
    const cart = this.getCart();
    let bool = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].title === product.title) {
        // cart[i].quantity ++;                
        bool =  true;        
        break;
      }      
    }

//    this.setInStorage();

    return bool;
  }


  inCart(product:any) {
    const cart = this.getCart();
    let bool = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].title === product.title) {
        cart[i].quantity ++;                
        bool =  true;        
        break;
      }      
    }

    this.setInStorage();

    return bool;
  }

}
