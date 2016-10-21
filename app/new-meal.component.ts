import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
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
    <label>Meal Type: </label>
    <select #newType>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </select>
    <label>Meal Name: </label>
    <input #newName type="text">
    <label>Meal Description: </label>
    <input #newDescription type="text">
    <label>Calories: </label>
    <input #newCalories type="number" step="1" min="0">
    <button class="btn" (click)="addClicked(newName.value, newDescription.value, newType.value, newDay.value, newCalories.value)">Add</button>
    `
})

export class newMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(day: string, type: string, name: string, description: string, calories: number) {
    var newMealAdded: Meal = new Meal(day, type, name, description, calories);
    this.newMealSender.emit(newMealAdded);
  }
}
