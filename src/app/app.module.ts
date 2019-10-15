import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatBadgeModule,MatCardModule,MatButtonModule, MatSelectModule,MatMenuModule,MatSidenavModule, MatIconModule,MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BackgroundComponent } from './background/background.component';
import { NavComponent } from './nav/nav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './startup/home/home.component';
import { InboxComponent } from './startup/inbox/inbox.component';
import { InvestorComponent } from './startup/investor/investor.component';
import { ExploreComponent } from './startup/explore/explore.component';
import { StartupComponent } from './invest/startup/startup.component';
import { HomeIComponent } from './invest/home-i/home-i.component';
import { InboxIComponent } from './invest/inbox-i/inbox-i.component';
import { ExploreIComponent } from './invest/explore-i/explore-i.component';
import { NavIComponent } from './invest/nav-i/nav-i.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BackgroundComponent,
    NavComponent,
    TopbarComponent,
    HomeComponent,
    InboxComponent,
    InvestorComponent,
    ExploreComponent,
    StartupComponent,
    HomeIComponent,
    InboxIComponent,
    ExploreIComponent,
    NavIComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatBadgeModule,  
    MatCardModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
