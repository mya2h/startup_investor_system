import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule,MatRadioModule,MatStepperModule,MatCheckboxModule,MatListModule, MatBadgeModule,MatCardModule,MatButtonModule,MatGridListModule, MatSelectModule,MatMenuModule,MatSidenavModule, MatIconModule,MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
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
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VarifyCodeComponent } from './auth/varify-code/varify-code.component';
import { Form1Component } from './auth/investor/form1/form1.component';
import { Form2Component } from './auth/investor/form2/form2.component';
import { Form3Component } from './auth/investor/form3/form3.component';
import { Form4Component } from './auth/investor/form4/form4.component';


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
    NavIComponent,
    ForgetPasswordComponent,
    VarifyCodeComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
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
    MatFormFieldModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
