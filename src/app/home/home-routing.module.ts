import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [{ path: 'home', component: HomePageComponent },
{ path: 'evenOdd', component: EvenOddComponent },
{ path: 'calculator', component: CalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
