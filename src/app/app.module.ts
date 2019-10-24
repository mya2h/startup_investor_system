import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { CounterModule } from 'ngx-counter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule,MatRadioModule,MatStepperModule,MatCheckboxModule,MatListModule, MatBadgeModule,MatCardModule,MatButtonModule,MatGridListModule, MatSelectModule,MatMenuModule,MatSidenavModule, MatIconModule,MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Components/auth/signup/signup.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { HomeInvestorComponent } from './Components/Investor/home-investor/home-investor.component';
import { InboxInvestorComponent } from './Components/Investor/inbox-investor/inbox-investor.component';
import { StartupsComponent } from './Components/Investor/startups/startups.component';
import { ExploreComponent } from './Components/Investor/explore/explore.component';
import { InvestorLandComponent } from './Components/Investor/investor-land/investor-land.component';
import { InvestorProfileComponent } from './Components/Investor/investor-profile/investor-profile.component';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeInvestorComponent,
    InboxInvestorComponent,
    StartupsComponent,
    ExploreComponent,
    InvestorLandComponent,
    InvestorProfileComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule,
    MatBadgeModule,  
    MatCardModule, 
    MatInputModule,
    MatStepperModule, 
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    CounterModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
