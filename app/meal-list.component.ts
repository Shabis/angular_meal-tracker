import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChangeCalories($event.target.value)" class="filter form-control">
    <option value="all">All Meals</option>
    <option value="low">Low Calorie Meals</option>
    <option value="high">High Calorie Meals</option>
  </select>
  <div class="table-responsive">
    <table class="meals table table-striped">
      <tr>
        <th>Day</th>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
        <th>Calories</th>
        <th></th>
      </tr>
      <tr *ngFor="let currentMeal of childMealList | calories:selectedCalories">
        <td>{{ currentMeal.day }}</td>
        <td>{{ currentMeal.type }}</td>
        <td>{{ currentMeal.name }}</td>
        <td>{{ currentMeal.description }}</td>
        <td>{{ currentMeal.calories }}</td>
        <td><button (click)="editButtonClick(currentMeal)" class="btn">Edit Meal</button></td>
      </tr>
    </table>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonClick(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  public selectedCalories: string = "all";
  onChangeCalories(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
}
