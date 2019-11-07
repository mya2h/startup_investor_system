import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { investorProfile } from '../Model/investorProfile';
import {projectRequest} from '../Model/projectRequest';
import {search} from '../Model/searchproject'
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
  singleprojectInvestedOn(id:string):Observable<any>{
    return this.http.get(`${this.apiURL}/startup-investor/startup/unverified/${id}`)
  }
  unverfiedRequests():Observable<any>{
    return this.http.get(`${this.apiURL}/startup-investor/investor/unverified`)
  }
  exploreProject(project:search): Observable<any>{
    return this.http.post(`${this.apiURL}/startup-project/search`,project)
  }
}
