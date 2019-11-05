import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { investorProfile } from '../Model/investorProfile';
import {projectRequest} from '../Model/projectRequest';
@Injectable({
  providedIn: 'root'
})
export class InvestorProfileService {
  apiURL="https://fierce-retreat-89553.herokuapp.com/v1";

  constructor(private http: HttpClient) { }
  
  createProfile(investor: investorProfile): Observable<any> {
    const profile = JSON.stringify(investor);
    return this.http.post(`${this.apiURL}/investors`, profile)
  }

  getStartupProject(): Observable<any> {
    return this.http.get(`${this.apiURL}/startup-project`);
  }

  projectRequest(request:projectRequest):Observable<any>{
    const askRequest = JSON.stringify(request);
    return this.http.post(`${this.apiURL}/startup-investor/investor`,askRequest)
  }

  projectInvestedOn():Observable<any>{
    return this.http.get(`${this.apiURL}/startup-investor/investor/verified`)
  }
  unverfiedRequests():Observable<any>{
    return this.http.get(`${this.apiURL}/startup-investor/investor/unverified`)
  }
}
