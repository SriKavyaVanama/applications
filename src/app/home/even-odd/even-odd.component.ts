import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.scss'],
})
export class EvenOddComponent {
  numberForm: FormGroup;
  result: string = '';
  isInvalidNumber: boolean = false;
  isResultShown: boolean = false;

  constructor(private fb: FormBuilder) {
    this.numberForm = this.fb.group({
      userInput: ['', [Validators.required]],
    });
  }

  hideResult(): void {
    this.isResultShown = false;
    this.isInvalidNumber = false;
  }

  checkEvenOrOdd(): void {
    const userInput = this.numberForm.get('userInput')?.value;
    if (userInput === null) {
      this.isInvalidNumber = true;
      this.isResultShown = false;
      return;
    }
    this.result = userInput % 2 === 0 ? 'Even' : 'Odd';
    this.isResultShown = true;
  }
}
