import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import {startupprofile} from '../Model/startupprofile'


@Injectable({
  providedIn: 'root'
})
export class StartupProfileService {

  constructor(private http:HttpClient) { }
   createProfile(pro:startupprofile):Observable<any>{
     const profile =JSON.stringify(startupprofile);
     const httpOptions = {
      headers: new HttpHeaders(
      {  
        
         'Content-Type': 'application/json'
      })
  }
    return this.http.post('https://fierce-retreat-89553.herokuapp.com/v1/startup-profile',profile,httpOptions)
   }
}
