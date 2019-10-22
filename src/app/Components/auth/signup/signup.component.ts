import { Component, OnInit } from '@angular/core';
import { User } from '../../../Model/users';
// import { ToastrService } from 'ngx-toastr';
import {SignupService} from '../../../Services/signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  selected = 'startup';
  constructor(private signupService:SignupService) { }
  signup(firstname:string,lastname:string,email:string,phone:number,password:string,role:string){
   const value :User = {
      first_name:firstname,
      last_name:lastname,
      email:email,
      password:password,
      phone_number:phone,
      role:role
    }
    this.signupService.register(value).subscribe(data=>{
      
     if(data.success){
       alert("it works");
       }
    })
    console.log(value);
  }




  ngOnInit() {

  }

}
