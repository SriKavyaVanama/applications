import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PrimeComponent } from './prime/prime.component';


const routes: Routes = [{ path: 'home', component: HomePageComponent },
{ path: 'even-odd', component: EvenOddComponent },
{ path: 'calculator', component: CalculatorComponent },
{ path: 'prime', component: PrimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
