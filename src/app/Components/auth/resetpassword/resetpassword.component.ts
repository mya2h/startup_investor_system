import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from '../../../Services/login.service'
import {MatSnackBar} from '@angular/material/snack-bar';
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
  doesntmuch = false
  CurrentState: any;
  IsResetFormValid = true;

  constructor(
    private _snackBar:MatSnackBar,
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
        newPassword: new FormControl ('', [Validators.required, Validators.minLength(4)]),
        confirmPassword:new FormControl('', [Validators.required, Validators.minLength(4)])
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
        if(newVal.confirmPassword!= newVal.password){
         this.doesntmuch = true
        }
        this.reset.changePassword(newrequest).subscribe(data=>{
          this.ResponseResetForm.reset();
         this._snackBar.open("Password changed successfully", "", {
          duration: 2000,
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
        })
      }
  }

}
