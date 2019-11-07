import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service'
import {StartupProfileService} from '../../../Services/startup-profile.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role:String;
  amount:number;
  requests:number;
  constructor(private logservice:LoginService,private notify:StartupProfileService) { }
  getrole(){
    this.role=this.logservice.getRole();
    if(this.role=="investor"){
     return true;
    }
    else{
      return false;
    }
  }
  getnewNotfication(){
    this.notify.getallNotfication().subscribe(data=>{
     this.amount = data.message.length;
    })
  }
  getrequest(){
    this.notify.getUnVerifiedStartups().subscribe(data=>{
      this.requests = data.message.length
    })
  }
  ngOnInit() {
    this.getrole();
    this. getnewNotfication();
    this.getrequest();
  }

}
