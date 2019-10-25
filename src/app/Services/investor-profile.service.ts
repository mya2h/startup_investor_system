import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import {investorProfile} from '../Model/investorProfile';
@Injectable({
  providedIn: 'root'
})
export class InvestorProfileService {

  constructor(private http: HttpClient) { }
  createProfile(investor: investorProfile) :Observable<any> {
    const profile=JSON.stringify(investor); 
    const httpOptions = {
      headers: new HttpHeaders(
      { 
    
         'Content-Type': 'application/json'
      })
  }
    return this.http.post('https://fierce-retreat-89553.herokuapp.com/v1/investors', profile,httpOptions

    )
}
}
