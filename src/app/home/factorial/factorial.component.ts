import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss'],
})
export class FactorialComponent {
  factorial: FormGroup;
  isResultShown: boolean = false;
  isInvalidNumber: boolean = false;
  result: number = 0;

  constructor(private fb: FormBuilder) {
    this.factorial = this.fb.group({
      factorialInput: ['', [Validators.required]],
    });
  }

  get enteredNumber(): number {
    return this.factorial.get('factorialInput')?.value;
  }

  factorialResult(enteredNumber: number): number {
    if (enteredNumber === 0 || enteredNumber === 1) {
      return 1;
    } else {
      let result = enteredNumber;
      for (let i = enteredNumber - 1; i > 1; i--) {
        result = result * i;
      }
      return result;
    }
  }

  hideResult(): void {
    this.isResultShown = false;
    this.isInvalidNumber = false;
  }
  checkFactorial(): void {
    const givenNumber: number = this.enteredNumber;
    if (givenNumber === null) {
      this.isInvalidNumber = true;
      this.isResultShown = false;
      return;
    }

    this.result = this.factorialResult(givenNumber);

    this.isResultShown = true;
  }
}
