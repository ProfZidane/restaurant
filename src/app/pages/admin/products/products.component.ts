import { Component, OnInit } from '@angular/core';
import * as Datas from '../../../datas/meals';
import { Meal } from 'src/app/models/meals';
import {NgForm} from '@angular/forms';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  meals: Array<Meal> | undefined;
  state = {
    loading: false,
    form: false,
    error: false
  };

  idLastest: any;

  constructor(private mealService: MealsService) { }

  ngOnInit(): void {
    this.meals = [...Datas.meals,...this.mealService.getMeals() ];
    console.log(this.meals);
    
    this.idLastest = Number(this.meals[this.meals.length-1].id) + 1
  }


  openForm() {
    if (this.state.form) {
      this.state.form = false;
    } else {
      this.state.form = true;
    }
  }


  onSubmit(f: NgForm) {
    console.log(f.valid); 
    console.log(f.value);
    this.state.loading =true;
    if (f.valid) {

      const newObj = {id: this.idLastest, title: f.value.title, description: f.value.description, price: f.value.price, img: f.value.img};
      // this.meals?.push(f.value);
      Datas.meals.push(newObj);
      this.mealService.setMeal(newObj);

      alert("Plat bien enregistré !");
      window.location.reload();


    } else {

      this.state.error = true;
      this.state.loading =false;

    }

  }




}
