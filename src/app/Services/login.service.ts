import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { investorProfile } from '../Model/investorProfile';

export interface User{
  email:string,
  password:string,
  role:string
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {


  constructor(private http:HttpClient,private router:Router) { }
  authenticate(user:User) :Observable<any> {

    const formValue=JSON.stringify(user); 
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Content-Type': 'application/json'
      })
  }
    return this.http.post('https://fierce-retreat-89553.herokuapp.com/v1/users/login', formValue,httpOptions

    )
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/'])
  }
  loogedIn(){
    return !!localStorage.getItem('token');
  }
  getRole(){
    return localStorage.getItem('role');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
