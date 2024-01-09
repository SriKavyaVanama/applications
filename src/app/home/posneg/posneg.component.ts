import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-posneg',
  templateUrl: './posneg.component.html',
  styleUrls: ['./posneg.component.scss']
})
export class PosnegComponent {
  posneg: FormGroup;
  isResultShown: boolean = false;
  isInvalidNumber: boolean = false;
  result?: string;

  constructor(private fb: FormBuilder) {
    this.posneg = this.fb.group({
      posnegInput: ['', [Validators.required]],
    });
  }

  get enteredNumber(): number {
    return this.posneg.get('posnegInput')?.value;
  }

  hideResult(): void {
    this.isResultShown = false;
    this.isInvalidNumber = false;
  }
  checkPositiveOrNegative(): void {
    const givenNumber: number = this.enteredNumber;
    if (givenNumber === null) {
      this.isInvalidNumber = true;
      this.isResultShown = false;
      return;
    }

    if (givenNumber === 0) {
      this.result = '0';
    } else if (givenNumber > 0) {
      this.result = 'Positive Number';
    } else if (givenNumber <  0) {
      this.result = 'Negative Number';
    }


  

    this.isResultShown = true;
  }
}
