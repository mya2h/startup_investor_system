import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  errorMessage: string;
  constructor(private reset:LoginService,private _snackBar:MatSnackBar) { }

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
      this._snackBar.open("Reset password link send to email sucessfully.", "", {
        duration: 2000,
      });
    },err => {
       console.log(err);
      if (err.error.message) {
        this.errorMessage = err.error.message.error;
      }
    }
    )
   }
 }
}
