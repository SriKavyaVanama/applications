import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatSlideToggleModule],
})
export class LoginRoutingModule {}
