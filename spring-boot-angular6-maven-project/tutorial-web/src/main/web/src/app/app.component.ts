import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  sum: number;
  calculate(first:number, second:number) {
   this.sum = +first + +second;
  }
}

