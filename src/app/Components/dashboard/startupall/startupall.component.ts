import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-startupall',
  templateUrl: './startupall.component.html',
  styleUrls: ['./startupall.component.css']
})
export class StartupallComponent implements OnInit {
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
    this.getrole();
  }

}
