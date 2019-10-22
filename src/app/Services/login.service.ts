import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User{
  email:string,
  password:string,
  role:string
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {


  constructor(private http:HttpClient) { }
  authenticate(user:User) :Observable<any> {
    const formValue=JSON.stringify(user); 
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Authorization': 'Your Token',
         'Content-Type': 'application/json'
      })
  }
    return this.http.post('https://damp-mountain-12322.herokuapp.com/v1/users/login', formValue,httpOptions

    )
  }
}
