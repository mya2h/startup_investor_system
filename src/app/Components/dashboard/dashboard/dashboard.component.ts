import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role:String;
  constructor(private logservice:LoginService) { }
  getrole(){
    this.role=this.logservice.getRole();
    if(this.role=="investor"){
     return true;
    }
    else{
      return false;
    }
  }
  ngOnInit() {
    this.getrole();
  }

}
