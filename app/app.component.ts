import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-meal-tracker',
  template: `
  <div class="container">
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Speghetti", "One cup noodles with two meatballs", "dinner", "tuesday", 750),
    new Meal("Oatmeal", "6oz oatmeal with 1/4 cup brown sugar", "breakfast", "thursday", 425),
    new Meal("turkey sandwich", "4oz meat on whole wheat roll", "lunch", "saturday", 475)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMealFromChild : Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
