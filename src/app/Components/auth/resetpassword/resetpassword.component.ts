import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from '../../../Services/login.service'
import { format } from 'url';
interface resetPass{
  reset_token:"string",
  password:"string"
}
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
 public ResponseResetForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  resetToken: null;
  CurrentState: any;
  IsResetFormValid = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private reset: LoginService
  ) { 
    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      this.resetToken = params.token;
      console.log(this.resetToken);
    });

  }

  ngOnInit() {
    this.ResponseResetForm = new FormGroup(
      {
        resettoken: new FormControl(this.resetToken),
        newPassword: new FormControl (['', [Validators.required, Validators.minLength(4)]]),
        confirmPassword:new FormControl(['', [Validators.required, Validators.minLength(4)]])
      }
    );
  }
  

  Validate(passwordFormGroup: FormGroup) {
    const new_password = passwordFormGroup.controls.newPassword.value;
    const confirm_password = passwordFormGroup.controls.confirmPassword.value;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }
  public ResetPassword= (newVal)=>{
       const newrequest:resetPass={
        reset_token:newVal.resettoken,
        password:newVal.newPassword
      }
      if(this.ResponseResetForm.valid){
        this.reset.changePassword(newrequest).subscribe(data=>{
          console.log(data)
        })
      }
  }

}
