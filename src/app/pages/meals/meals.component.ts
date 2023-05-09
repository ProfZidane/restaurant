import { Component, OnInit } from '@angular/core';
import * as Datas from '../../datas/meals';
import { Meal } from 'src/app/models/meals';
import { Router } from '@angular/router';
import { MealsService } from 'src/app/services/meals.service';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meals: Array<Meal> | undefined;

  constructor(private router: Router, private mealService: MealsService) { }

  ngOnInit(): void {
    this.meals = [...Datas.meals,...this.mealService.getMeals() ];

  }


  goToDetails(obj: any) {
    this.router.navigateByUrl("meal-detail/" + obj.id);
  }
}
