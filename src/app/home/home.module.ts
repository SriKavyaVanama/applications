import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeComponent } from './prime/prime.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { ArmstrongComponent } from './armstrong/armstrong.component';
import { PosnegComponent } from './posneg/posneg.component';
import { PalindromeComponent } from './palindrome/palindrome.component';


@NgModule({
  declarations: [HomePageComponent, EvenOddComponent, CalculatorComponent, PrimeComponent, FactorialComponent, FibonacciComponent, ArmstrongComponent, PosnegComponent, PalindromeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class HomeModule {}
