
import { Component, OnInit, OnChanges } from '@angular/core';
import { CalculatorService } from './calculator/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorService]
})
export class AppComponent implements OnInit, OnChanges {


  title = 'calculator';
 sum = 0;
first: number;
second: number;


constructor(
    private calc: CalculatorService
  ) {}

  public somme () {
      this.sum = this.calc.calculate(this.first , this.second);
  }

  ngOnInit() {
  }

  ngOnChanges() {


  }


}

