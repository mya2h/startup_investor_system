import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvestorLandComponent} from '../app/Components/Investor/investor-land/investor-land.component';
import {LoginComponent} from '../app/Components/auth/login/login.component'
import {SignupComponent} from '../app/Components/auth/signup/signup.component'
import {InvestorProfileComponent } from '../app/Components/Investor/investor-profile/investor-profile.component'
import {HomeInvestorComponent} from '../app/Components/Investor/home-investor/home-investor.component'
import {ExploreComponent} from '../app/Components/Investor/explore/explore.component'
import {InboxInvestorComponent} from '../app/Components/Investor/inbox-investor/inbox-investor.component'
import {StartupsComponent} from '../app/Components/Investor/startups/startups.component'
import { AuthGuard } from './auth.guard';
import { LoginGuard } from '../app/Guard/login.guard';
const routes: Routes = [
  {path: '', component: LoginComponent ,canActivate:[LoginGuard]},
  {path: 'investor-land', component: InvestorLandComponent,canActivate:[AuthGuard],
    children:[
      {path:'home',component:HomeInvestorComponent},
      {path:'profile',component:InvestorProfileComponent},
      {path:'inbox',component:InboxInvestorComponent},
      {path:'startups',component:StartupsComponent},
      {path:'explore',component:ExploreComponent},
      {path:'profile',component:InvestorProfileComponent}
    ]
    
   },
   {path:'signup',component:SignupComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
