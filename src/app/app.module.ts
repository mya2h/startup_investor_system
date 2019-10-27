import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS}  from '@angular/common/http';
import { CounterModule } from 'ngx-counter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule,MatDialogModule, MatPaginatorModule,MatFormFieldModule,MatSortModule, MatDatepickerModule, MatNativeDateModule,MatRadioModule,MatStepperModule,MatCheckboxModule,MatListModule, MatBadgeModule,MatCardModule,MatButtonModule,MatGridListModule, MatSelectModule,MatMenuModule,MatSidenavModule, MatIconModule,MatToolbarModule,MatTableModule } from '@angular/material';
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
import { HomeComponent } from './Components/dashboard/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { InboxComponent } from './Components/dashboard/inbox/inbox.component';
import { ProfileComponent } from './Components/dashboard/profile/profile.component';
import { StartupsHomeComponent } from './Components/startups/startups-home/startups-home.component';
import { StartupsInboxComponent } from './Components/startups/startups-inbox/startups-inbox.component';
import { StartupsStartupsComponent } from './Components/startups/startups-startups/startups-startups.component';
import { StartupsExploreComponent } from './Components/startups/startups-explore/startups-explore.component';
import { StartupsProfileComponent } from './Components/startups/startups-profile/startups-profile.component';
import { ExploreallComponent } from './Components/dashboard/exploreall/exploreall.component';
import { StartupallComponent } from './Components/dashboard/startupall/startupall.component';
import { LogComponent } from './Components/auth/log/log.component';
import {TokenInterceptorService} from './Services/token-interceptor.service';
import { ProjectComponent } from './Components/startups/project/project.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewprojectComponent } from './Components/startups/viewproject/viewproject.component';

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
    InvestorProfileComponent,
    HomeComponent,
    DashboardComponent,
    InboxComponent,
    ProfileComponent,
    StartupsHomeComponent,
    StartupsInboxComponent,
    StartupsStartupsComponent,
    StartupsExploreComponent,
    StartupsProfileComponent,
    ExploreallComponent,
    StartupallComponent,
    LogComponent,
    ProjectComponent,
    ViewprojectComponent
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
    FlexLayoutModule,
    MatCardModule, 
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatStepperModule, 
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    CounterModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ViewprojectComponent]
})
export class AppModule { }
