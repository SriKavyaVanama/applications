import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss'],
})
export class PrimeComponent {
  primeNumber: FormGroup;
  isPrime: boolean = true;
  isResultShown: boolean = false;
  isInvalidNumber: boolean = false;
  result: string = '';
 
  

  constructor(private fb: FormBuilder) {
    this.primeNumber = this.fb.group({
      prime: ['', [Validators.required]],
    });
  }

  get enteredNumber(): number{
    return this.primeNumber.get('prime')?.value
  }

  isPrimeNumber(number: number): boolean {
    if (number % 2 === 0 && number !== 2) {
      return false;
    }

    const limit = Math.floor(Math.sqrt(number));

    for (let index = 3; index <= limit; index += 2) {
      if (number % index === 0) {
        return false;
      }
    }

    return true;
  }

  hideResult(): void {
    this.isResultShown = false;
    this.isInvalidNumber = false;
  }
  primeOrNot(): void {
    const givenNumber: number = this.enteredNumber;
    if (givenNumber === null) {
      this.isInvalidNumber = true;
      this.isResultShown = false;
      return;
    }

    if (givenNumber === 0) {
      this.result = 'Neither prime nor consecutive';
    } else if (this.isPrimeNumber(givenNumber) === true) {
      this.result = 'Prime Number';
    } else if (this.isPrimeNumber(givenNumber) === false) {
      this.result = 'Not a Prime Number';
    }

    this.isResultShown = true;
  }
}
