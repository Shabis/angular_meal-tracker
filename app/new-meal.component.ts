import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <form id="new-meal-form">
    <h1>Add New Meal</h1>
    <label>Day: </label>
    <select #newDay>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
    <br>
    <label>Meal Type: </label>
    <select #newType>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </select>
    <br>
    <label>Meal Name: </label>
    <input #newName type="text">
    <br>
    <label>Meal Description: </label>
    <input #newDescription type="text">
    <br>
    <label>Calories: </label>
    <input #newCalories type="number" step="1" min="0">
    <br>
    <button class="btn" (click)="addClicked( newDay.value, newType.value, newName.value, newDescription.value, newCalories.value)">Add</button>
  </form>
  `
})

export class newMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(day: string, type: string, name: string, description: string, calories: number) {
    var newMealAdded: Meal = new Meal(day, type, name, description, calories);
    this.newMealSender.emit(newMealAdded);
  }
}
