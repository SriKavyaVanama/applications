import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent, EvenOddComponent, CalculatorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class HomeModule {}