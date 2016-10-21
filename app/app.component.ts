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
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Tuesday", "Dinner", "Speghetti", "One cup noodles with two meatballs", 750),
    new Meal("Thursday", "Breakfast", "Oatmeal", "6oz oatmeal with 1/4 cup brown sugar", 425),
    new Meal("Saturday", "Lunch", "turkey sandwich", "4oz meat on whole wheat roll", 475)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMealFromChild : Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
