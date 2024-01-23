import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PrimeComponent } from './prime/prime.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { ArmstrongComponent } from './armstrong/armstrong.component';
import { PosnegComponent } from './posneg/posneg.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { MagazineComponent } from './magazine/magazine.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'even-odd', component: EvenOddComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'prime', component: PrimeComponent },
  { path: 'factorial', component: FactorialComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'armstrong', component: ArmstrongComponent },
  { path: 'posneg', component: PosnegComponent },
  { path: 'palindrome', component: PalindromeComponent },
  { path: 'magazine', component: MagazineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
