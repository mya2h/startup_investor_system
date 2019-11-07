import { Component, OnInit } from '@angular/core';
import { User } from '../../../Model/users';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {SignupService} from '../../../Services/signup.service'
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  durationInSeconds = 3;
  public registerForm:FormGroup;
  selected = 'startup';
  doesntmuch = false
  errorMessage: string;
  forbiddenEmails: any;
  successMessage: string;
  constructor(private signupService:SignupService,private router:Router,private _snackBar:MatSnackBar) { }
  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName : new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),
      confirmPassword: new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required])
    })   
 
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }
  public createOwner = (ownerFormValue) => {
  
    if (this.registerForm.valid) {
      if (ownerFormValue.confirmPassword != ownerFormValue.password) {
        this.doesntmuch = true
      }
      else{
     const user:User={
      first_name:ownerFormValue.firstName,
      last_name:ownerFormValue.lastName,
      phone_number:ownerFormValue.phone, 
      email:ownerFormValue.email,
      password:ownerFormValue.password,
      role:ownerFormValue.role
    }
    this.signupService.register(user).subscribe(data=>{
      if(data.success){
        this.registerForm.reset();
         this._snackBar.open("Verfication sent to your email", "", {
          duration: 2000,
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
       
      }


 },err=> {
   console.log(err);
  if (err.error.error) {
    this.errorMessage = err.error.error[0].message;
  }
 else if (err.error.message) {
    this.errorMessage = err.error.message;
  }
}
 );
  }
}
  }
  
  // openSnackBar() {
  //   this._snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }
}
