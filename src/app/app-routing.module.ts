import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorLandComponent } from '../app/Components/Investor/investor-land/investor-land.component';
import { LoginComponent } from '../app/Components/auth/login/login.component'
import { SignupComponent } from '../app/Components/auth/signup/signup.component'
import { InvestorProfileComponent } from '../app/Components/Investor/investor-profile/investor-profile.component'
import { HomeInvestorComponent } from '../app/Components/Investor/home-investor/home-investor.component'
import { ExploreComponent } from '../app/Components/Investor/explore/explore.component'
import { InboxInvestorComponent } from '../app/Components/Investor/inbox-investor/inbox-investor.component'
import { StartupsComponent } from '../app/Components/Investor/startups/startups.component'
import { AuthGuard } from './auth.guard';
import { LoginGuard } from '../app/Guard/login.guard';
import { DashboardComponent } from '../app/Components/dashboard/dashboard/dashboard.component'
import { HomeComponent } from '../app/Components/dashboard/home/home.component';
import { InboxComponent } from '../app/Components/dashboard/inbox/inbox.component';
import { ExploreallComponent } from '../app/Components/dashboard/exploreall/exploreall.component';
import { StartupallComponent } from '../app/Components/dashboard/startupall/startupall.component';
import { ProfileComponent } from '../app/Components/dashboard/profile/profile.component';
import { ProjectComponent } from '../app/Components/startups/project/project.component';
import { from } from 'rxjs';
import {ForgetPasswordComponent} from '../app/Components/auth/forget-password/forget-password.component'
import {ResetpasswordComponent} from '../app/Components/auth/resetpassword/resetpassword.component'
import {ViewprojectComponent} from '../app/Components/startups/viewproject/viewproject.component'
import {RequestsComponent} from '../app/Components/dashboard/requests/requests.component'
import {InvestedProjectDetailComponent} from '../app/Components/Investor/invested-project-detail/invested-project-detail.component'
import {NotificationComponent} from '../app/Components/dashboard/notification/notification.component'
const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'startups', component: StartupallComponent },
      { path: 'explore', component: ExploreallComponent },
      { path: 'profile', component: ProfileComponent },
      { path:'requests',component:RequestsComponent},
      { path:'notfication',component:NotificationComponent},
      {path:'startups/projectDetail/:id',component:ViewprojectComponent},
      {path:'startups/invested/:id',component:InvestedProjectDetailComponent},

    ]
  },

 
  { path: 'signup', component: SignupComponent },
  { path: 'forgetPassword',component:ForgetPasswordComponent},
  { path: 'resetpassword/:token',component:ResetpasswordComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
