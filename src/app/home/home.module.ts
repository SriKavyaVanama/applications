import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material.module';
import { ArmstrongComponent } from './armstrong/armstrong.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { PosnegComponent } from './posneg/posneg.component';
import { PrimeComponent } from './prime/prime.component';
@NgModule({
  declarations: [
    HomePageComponent,
    EvenOddComponent,
    CalculatorComponent,
    PrimeComponent,
    FactorialComponent,
    FibonacciComponent,
    ArmstrongComponent,
    PosnegComponent,
    PalindromeComponent,
    MagazineComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
})
export class HomeModule {}
