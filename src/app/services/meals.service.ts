import { Injectable } from '@angular/core';
import * as Data from '../datas/meals';
import { Meal } from '../models/meals';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor() { }


  getMeals() {
    const meals = localStorage.getItem('meals');
    if (meals) {
      return JSON.parse(meals);
    }
    return [];
  }

  setMeal(meal: any) {
    let meals = this.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  getByID(id: any) {
    let obj:Meal | undefined;
    const fullMeals = [...Data.meals,...this.getMeals() ];
    for (let i = 0; i < fullMeals.length; i++) {
      
      if (fullMeals[i].id === Number(id)) return fullMeals[i];
    }
    
    return obj;
  }

}
