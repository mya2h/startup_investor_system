import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service';
import {User} from '../../../Services/login.service';
import { Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

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
  public ownerForm: FormGroup;

  constructor(private loginservice:LoginService,private router:Router) { }
  ngOnInit() {
    this.ownerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
      role:new FormControl('',[Validators.required])
    });
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


 },err=>console.log(err)
 );
  }
  }
}
