import { Component, OnInit } from '@angular/core';
import{LoginService} from '../../../Services/login.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
