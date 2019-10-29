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
import {DashboardComponent} from '../app/Components/dashboard/dashboard/dashboard.component'
import {HomeComponent} from '../app/Components/dashboard/home/home.component';
import {InboxComponent} from '../app/Components/dashboard/inbox/inbox.component';
import { ExploreallComponent} from '../app/Components/dashboard/exploreall/exploreall.component';
import {StartupallComponent} from '../app/Components/dashboard/startupall/startupall.component';
import {ProfileComponent} from '../app/Components/dashboard/profile/profile.component';
import {ProjectComponent} from '../app/Components/startups/project/project.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', component: LoginComponent ,canActivate:[LoginGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
   children:[
    {path:'home',component:HomeComponent},
    {path:'inbox',component:InboxComponent},
    {path:'startups',component:StartupallComponent},
    {path:'explore',component:ExploreallComponent},
    {path:'profile',component:ProfileComponent}
]},
{path:'signup',component:SignupComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
