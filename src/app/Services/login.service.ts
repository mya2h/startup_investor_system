import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    return this.http.post('https://damp-mountain-12322.herokuapp.com/v1/users/login', formValue,httpOptions

    )
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
  loogedIn(){
    return !!localStorage.getItem('token');
  }
}
