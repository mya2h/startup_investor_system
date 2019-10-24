import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {LoginService} from '../app/Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private _loginservice:LoginService,private _router:Router){}
 canActivate():boolean{
   if(this._loginservice.loogedIn()){
     return true;
   } else{
     this._router.navigate(['/'])
     return false;
   }
 }
}
