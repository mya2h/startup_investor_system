import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
interface reset{
  email:string
}
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public resetPassword: FormGroup;
  constructor(private reset:LoginService) { }

  ngOnInit() {
    this.resetPassword = new FormGroup({
       email:new FormControl('',[Validators.required]) 
    }) 
  }
 public resetPass = (password)=>{
   if(this.resetPassword.valid){
     const user:reset={
       email:password.email
     }
    this.reset.forgetPassword(user).subscribe(data=>{
      console.log(data);
    })
   }
 }
}
