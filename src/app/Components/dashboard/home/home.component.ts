import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role:String;
  getrole(){
    this.role=this.logservice.getRole();
    if(this.role=="investor"){
     return true;
     
    }
    else{
      return false;
    }
  }
  
  constructor(private logservice:LoginService) { }

  ngOnInit() {
    // console.log(this.getrole());
    this.getrole();
    
  }

}
