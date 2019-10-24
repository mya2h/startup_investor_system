import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {LoginService} from '../../app/Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _loginservice:LoginService,private _router:Router){}
  canActivate():boolean{
    if(this._loginservice.loogedIn()){
      this._router.navigate(['/investor-land'])
      return false
    } else{
      return true
    }
  }

  
}
