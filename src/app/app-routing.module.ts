import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvestorLandComponent} from '../app/Components/Investor/investor-land/investor-land.component';
import {LoginComponent} from '../app/Components/auth/login/login.component'
import {SignupComponent} from '../app/Components/auth/signup/signup.component'
import {InvestorProfileComponent } from '../app/Components/Investor/investor-profile/investor-profile.component'
const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'investor-land', component: InvestorLandComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
