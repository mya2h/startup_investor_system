import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { startupprofile } from '../Model/startupprofile';
import { project } from '../Model/project';


@Injectable({
  providedIn: 'root'
})
export class StartupProfileService {
  apiURL="https://fierce-retreat-89553.herokuapp.com/v1";

  constructor(private http: HttpClient) { }
  createProfile(profile: startupprofile): Observable<any> {
    const profileInfo = JSON.stringify(profile);
    return this.http.post(`${this.apiURL}/startup-profile`, profileInfo)
  }
  getProfileInfo(): Observable<any> {
    return this.http.get(`${this.apiURL}/startup-profile`)
  }
  updateProfile(profile: startupprofile): Observable<any> {
    const profileInfo = JSON.stringify(profile);
    return this.http.put(`${this.apiURL}/startup-profile`, profileInfo)
  }

  createProject(projects: project): Observable<any> {
    const project = JSON.stringify(projects);
    return this.http.post(`${this.apiURL}/startup-project`, project);

  }
  getProject(): Observable<any> {
  
    return this.http.get(`${this.apiURL}/startup-project/user`);
  }
  getAllInvestors():Observable<any>{
    return this.http.get(`${this.apiURL}/investors/all`)
  }
}
