import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { startupprofile } from '../Model/startupprofile';
import { project } from '../Model/project';
import {progress} from '../Model/progress';
import {verifyInvestor} from '../Model/verifyinvestor';
import {team} from '../Model/team'
interface member{
  user:string
}
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
  deleteProject(id:string):Observable<any>{
    return this.http.delete(`${this.apiURL}/startup-project/${id}`);
  }
  getProject(): Observable<any> {
  
    return this.http.get(`${this.apiURL}/startup-project/user`);
  }
  getSingleProject(id:string):Observable<any>{
    return this.http.get(`${this.apiURL}/startup-project/${id}`)
  }
  getAllInvestors():Observable<any>{
    return this.http.get(`${this.apiURL}/investors/all`)
  }
  addProgress(prog:progress,id:string):Observable<any>{
    return this.http.post(`${this.apiURL}/startup-progress/${id}`,prog)
  }
  addTeam(team:team,id:string):Observable<any>{
    return this.http.post(`${this.apiURL}/startup-project/add-member/${id}`,team)
  }
  removeTeam(id:string,user:member):Observable<any>{
    return this.http.post(`${this.apiURL}/startup-project/remove-member/${id}`,user)
  }
  getVerifiedInvestorsOne(id:string):Observable<any>{
    return this.http.get(`${this.apiURL}/startup-investor/startup/verified/${id}`)
  }
  getUnverifiedInvestorsOne(id:string):Observable<any>{
    return this.http.get(`${this.apiURL}/startup-investor/startup/unverified/${id}`)
  }
  getUnVerifiedStartups():Observable<any>{
    return this.http.get(`${this.apiURL}/startup-investor/startup/unverified`)
  }
  verifyUser(user:verifyInvestor):Observable<any>{
    return this.http.post(`${this.apiURL}/startup-investor/verify`,user)
  }
  getrecentNotfication():Observable<any>{
    return this.http.get(`${this.apiURL}/notifications/recent`)
  }
  getallNotfication():Observable<any>{
    return this.http.get(`${this.apiURL}/notifications/all`)
  }
}
