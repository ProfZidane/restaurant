import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meal } from 'src/app/models/meals';
import { MealsService } from 'src/app/services/meals.service';
import { CartService } from 'src/app/services/static/cart.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
id: any
meal: Meal | undefined;
subscription: Subscription = new Subscription;
state = {
  in_cart: false
};
meal_cart: any;
  constructor(private route: ActivatedRoute, private mealService: MealsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    
    // this.mealService.getByID(this.id);
    if (this.id) {
      this.meal = this.mealService.getByID(this.id); console.log(this.meal);
      this.verifyProduct(this.meal);
    }
    
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  verifyProduct(meal: any) {
    this.state.in_cart = this.cartService.VerifyInCart(meal);
    console.log(this.state.in_cart);

    if (this.state.in_cart) {
      let cart = this.cartService.getCart();

      for (let i = 0; i < cart.length; i++) {
        
        if (cart[i].id === meal.id) {
          this.meal_cart = cart[i];
          break;
        }
        
      }
    }

    console.log(this.meal_cart);
    
    
  }


  addCart(meal: Meal) {

    if (this.cartService.inCart(meal)) {

      alert("La quantité (+1) a été ajoutée !");
      
    } else {

      const quantity = prompt("Quelle quantité voulez-vous?");


      const in_cart = {
        id: meal.id,
        title: meal.title,
        description: meal.description,
        price: meal.price,
        img: meal.img,
        quantity: quantity
    };

    
    this.cartService.addToCart(in_cart);

    window.location.reload();

    } 
  }


  removeProduct(myproduct:any) {
    const t = this.cartService.getCart().filter((product: any) => product != myproduct );
    console.log(t);
    this.cartService.injectCart(t);    

    window.location.reload();
  }
}
