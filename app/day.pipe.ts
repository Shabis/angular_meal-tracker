import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "day",
  pure: false
})

export class DayPipe implements PipeTransform {
  transform(input: Meal[], DayofTheWeek) {
    var output: Meal[] = [];
    if (DayofTheWeek === "Monday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].day === "Monday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (DayofTheWeek === "Tuesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].day === "Tuesday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (DayofTheWeek === "Wednesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].day === "Wednesday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (DayofTheWeek === "Thursday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].day === "Thursday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (DayofTheWeek === "Friday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].day === "Friday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (DayofTheWeek === "Saturday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].day === "Saturday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (DayofTheWeek === "Sunday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].day === "Sunday") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
