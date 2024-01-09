import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
})
export class FibonacciComponent {
  fibonacci: FormGroup;
  isResultShown: boolean = false;
  isInvalidNumber: boolean = false;
  result?: string;

  constructor(private fb: FormBuilder) {
    this.fibonacci = this.fb.group({
      fibonacciInput: ['', [Validators.required]],
    });
  }

  get enteredNumber(): number {
    return this.fibonacci.get('fibonacciInput')?.value;
  }

  fibonacciResult(userInputNumber: number): string {
    let sum: number = 0;
    let series: string = '0 1';
    if (userInputNumber === 0) {
      return '0';
    } else if (userInputNumber > 0) {
      let temp_2: number = 1;
      let temp_1: number = 0;
      for (let i = 0; i < userInputNumber; i++) {
        if (sum >= userInputNumber) {
          break;
        }
        sum = temp_1 + temp_2;
        temp_1 = temp_2;
        temp_2 = sum;

        series = `${series} ${sum}`;
      }
    }
    return series;
  }

  hideResult(): void {
    this.isResultShown = false;
    this.isInvalidNumber = false;
  }
  checkFibonacci(): void {
    const givenNumber: number = this.enteredNumber;
    if (givenNumber === null) {
      this.isInvalidNumber = true;
      this.isResultShown = false;
      return;
    }

    this.result = this.fibonacciResult(givenNumber);

    this.isResultShown = true;
  }
}
