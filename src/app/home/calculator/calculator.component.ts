import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  calculatorForm: FormGroup<{ input: FormControl<string | null> }>;
  displayResult: boolean = false;
  numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operatorList: string[] = ['+', '-', '*', '/', '%'];
  result: number = 0;
  inputEntered: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.calculatorForm = this.formBuilder.group({
      input: [''],
    });
  }

  ngOnInit(): void {
    this.calculatorForm.valueChanges.subscribe(
      (formValues: Partial<{ input: string | null }>) => {
        this.inputEntered = !!this.userInput?.value?.length;
        this.displayResult = false;
      }
    );
  }

  get userInput(): AbstractControl<string | null, string | null> | null {
    return this.calculatorForm.get('input');
  }

  setInputNumber(buttonValue: number | string): void {
    const inputValue: string = (this.userInput?.value as string) + buttonValue;
    this.userInput?.setValue(inputValue as string);
  }

  onClear(): void {
    this.userInput?.setValue('');
    this.displayResult = false;
  }

  onSubmit(): void {
    this.result = eval(this.userInput?.value as string);
    this.displayResult = true;
  }
}
