import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { investorProfile } from '../Model/investorProfile';

export interface User {
  email: string,
  password: string,
  role: string
}
export interface newPassword{
  reset_token:string
  password:string
}
export interface Email {
  email: string
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  apiURL="https://fierce-retreat-89553.herokuapp.com/v1";

  constructor(private http: HttpClient, private router: Router) { }
  authenticate(user: User): Observable<any> {
    const formValue = JSON.stringify(user);
    return this.http.post('https://fierce-retreat-89553.herokuapp.com/v1/users/login', formValue)
  }
  forgetPassword(email:Email){
    const reset = JSON.stringify(email);
    return this.http.post(`${this.apiURL}/users/reset-password`,reset)
    // /users/reset-password 
  }
  changePassword(newpass:newPassword){
    const reset = JSON.stringify(newpass);
    return this.http.post(`${this.apiURL}/users/set-password`,reset)
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/'])
  }
  loogedIn() {
    return !!localStorage.getItem('token');
  }
  getRole() {
    return localStorage.getItem('role');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
