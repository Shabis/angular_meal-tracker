import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal" id="editMeal">
    <h1>Edit Meal</h1>
    <label>Meal Name: </label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Meal Description: </label>
    <input [(ngModel)]="childSelectedMeal.description">
    <label>Meal Type: </label>
    <select [(ngModel)]="childSelectedMeal.type">
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </select>
    <label>Day: </label>
    <select [(ngModel)]="childSelectedMeal.day">
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
    <label>Calories: </label>
    <input [(ngModel)]="childSelectedMeal.calories" type="number" step="1" min="0">
    <button class="btn" (click)="doneClicked()">Done</button>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
