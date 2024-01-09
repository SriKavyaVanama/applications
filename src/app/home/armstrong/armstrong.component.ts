import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-armstrong',
  templateUrl: './armstrong.component.html',
  styleUrls: ['./armstrong.component.scss'],
})
export class ArmstrongComponent {
  armstrong: FormGroup;
  isResultShown: boolean = false;
  isInvalidNumber: boolean = false;
  result?: string;

  constructor(private fb: FormBuilder) {
    this.armstrong = this.fb.group({
      armstrongInput: ['', [Validators.required]],
    });
  }

  get enteredNumber(): number {
    return this.armstrong.get('armstrongInput')?.value;
  }

  armstrongResult(userInputNumber: number): boolean {
    let temp: number = userInputNumber;
    let sum: number = 0;
    let x: number = 0;

    while (temp > 0) {
      x = temp % 10;
      sum = sum + x * x * x;
      temp = Math.trunc(temp / 10);
    }

    if (sum === userInputNumber) {
      return true;
    } else {
      return false;
    }
  }

  hideResult(): void {
    this.isResultShown = false;
    this.isInvalidNumber = false;
  }
  checkArmstrong(): void {
    const givenNumber: number = this.enteredNumber;
    if (givenNumber === null) {
      this.isInvalidNumber = true;
      this.isResultShown = false;
      return;
    }

    this.result =
      this.armstrongResult(givenNumber) === true
        ? 'Armstrong Number'
        : 'not a Armstrong Number';

    this.isResultShown = true;
  }
}
