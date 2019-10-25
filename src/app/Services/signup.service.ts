import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../Model/users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  register(user: User) :Observable<any> {
    const formValue=JSON.stringify(user); 
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Content-Type': 'application/json'
      })
  }
    return this.http.post('https://damp-mountain-12322.herokuapp.com/v1/users', formValue,httpOptions

    )
}
}
