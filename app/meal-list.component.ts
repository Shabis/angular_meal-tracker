import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div class="col-xs-6">
      <select (change)="onChangeCalories($event.target.value)" class="filter form-control">
        <option value="all">All Meals</option>
        <option value="low">Low Calorie Meals</option>
        <option value="high">High Calorie Meals</option>
        </select>
    </div>
    <div class="col-xs-6">
      <select (change)="onChangeDay($event.target.value)" class="filter form-control">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>
  </div>
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
      <tr *ngFor="let currentMeal of childMealList | calories:selectedCalories | day:selectedDay">
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
  onChangeCalories(MenuOption) {
    this.selectedCalories = MenuOption;
  }

  public selectedDay: string = "all";
  onChangeDay(MenuOption) {
    this.selectedDay = MenuOption;
  }
}
