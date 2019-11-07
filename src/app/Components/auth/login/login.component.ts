import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service';
import {User} from '../../../Services/login.service';
import { Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import {ErrorService} from '../../../Services/error.service';

interface log {
  email:string,
  password:string,
  role:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  public ownerForm: FormGroup;
  private dialogConfig;
  constructor(private loginservice:LoginService,private router:Router,private errorService:ErrorService) { }
  ngOnInit() {
    this.ownerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
      role:new FormControl('',[Validators.required])
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
 
  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {

     const user:log={
      email:ownerFormValue.email,
      password:ownerFormValue.password,
      role:ownerFormValue.role
    }
    this.loginservice.authenticate(user).subscribe(data=>{
      localStorage.setItem('token',data.token);
      console.log(data.token);
      this.router.navigate(['/dashboard']);
      console.log(user.role);
      localStorage.setItem('role',user.role);


 },(err => {
  // this.errorService.dialogConfig = { ...this.dialogConfig };
  // this.errorService.handleError(error);
  if (err.error.message) {
    this.errorMessage = err.error.message;
  }
  // console.log(error.error.message.error[0].message);
})
 );
  }
  }
}
