import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss'],
})
export class PalindromeComponent {
  palindrome: FormGroup;
  isResultShown: boolean = false;
  isInvalidNumber: boolean = false;
  result?: string;

  constructor(private fb: FormBuilder) {
    this.palindrome = this.fb.group({
      palindromeInput: ['', [Validators.required]],
    });
  }

  get enteredInput(): string {
    return this.palindrome.get('palindromeInput')?.value;
  }

  palindromeResult(userInputNumber: string): boolean {
    if(userInputNumber.split("").reverse().join("") === userInputNumber){
      return true
    }else{
      return false;
    }
    
  }

  hideResult(): void {
    this.isResultShown = false;
    this.isInvalidNumber = false;
  }
  checkPalindrome(): void {
    const givenInput: string = this.enteredInput;
    if (givenInput === null) {
      this.isInvalidNumber = true;
      this.isResultShown = false;
      return;
    }

    this.result =
      this.palindromeResult(givenInput) === true
        ? 'Palindrome'
        : 'not a Palindrome';

    this.isResultShown = true;
  }

  checkStringEqual(){
    
  }
}
