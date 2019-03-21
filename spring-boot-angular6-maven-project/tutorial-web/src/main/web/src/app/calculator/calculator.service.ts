import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

@Input() f: number;
@Input() s: number;
 constructor() { }

  public calculate(f, s) {
   let result = 0;
   result = +f + +s ;
   return result;
  }

}

