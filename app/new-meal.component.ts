import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>Edit Meal</h1>
    <label>Meal Name: </label>
    <input #newName type="text">
    <label>Meal Description: </label>
    <input #newDescription type="text">
    <label>Meal Type: </label>
    <select #newType>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </select>
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
    <label>Calories: </label>
    <input #newCalories type="number" step="1" min="0">
    <button class="btn" (click)="addClicked(newName.value, newDescription.value, newType.value, newDay.value, newCalories.value)">Add</button>
    `
})

export class newMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, type: string, day: string, calories: number) {
    var newMealAdded: Meal = new Meal(name, description, type, day, calories);
    this.newMealSender.emit(newMealAdded);
  }
}
