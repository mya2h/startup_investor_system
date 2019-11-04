import { Component, OnInit } from '@angular/core';
import { User } from '../../../Model/users';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {SignupService} from '../../../Services/signup.service'
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  durationInSeconds = 3;
  public registerForm:FormGroup;
  selected = 'startup';
  constructor(private signupService:SignupService,private _snackBar:MatSnackBar) { }
  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName : new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required])
    })   
 
  }
  public createOwner = (ownerFormValue) => {
    if (this.registerForm.valid) {

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
        this._snackBar.open("User sucessfully registerd", "", {
          duration: 2000,
        });
      }


 },err=>console.log(err)
 );
  }
  }
  // openSnackBar() {
  //   this._snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }
}
