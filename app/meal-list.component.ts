import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './Meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="table-responsive">
    <table class="meals table table-striped">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Day</th>
        <th>Calories</th>
      </tr>
      <tr *ngFor="let currentMeal of childMealList">
        <td>{{ currentMeal.name }}</td>
        <td>{{ currentMeal.description }}</td>
        <td>{{ currentMeal.type }}</td>
        <td>{{ currentMeal.day }}</td>
        <td>{{ currentMeal.calories }}</td>
        <td><button (click)="editButtonClick(currentMeal)" class="btn">Edit Meal</button></td>
      </tr>
    </table>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
