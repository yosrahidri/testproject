import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

@Input() first: number;
@Input() second: number;
 constructor() { }

  public calculate(first, second) {
   let result = 0;
   result = +first + +second;
   return result;
  }

}

