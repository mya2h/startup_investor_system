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
  constructor(private http: HttpClient) { }
  createProfile(profile: startupprofile): Observable<any> {
    const profileInfo = JSON.stringify(profile);
    const httpOptions = {
      headers: new HttpHeaders(
        {

          'Content-Type': 'application/json'
        })
    }
    return this.http.post('https://fierce-retreat-89553.herokuapp.com/v1/startup-profile', profileInfo, httpOptions)
  }
  getProfileInfo(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {

          'Content-Type': 'application/json'
        })
    }
    return this.http.get('https://fierce-retreat-89553.herokuapp.com/v1/startup-profile', httpOptions)
  }
  updateProfile(profile: startupprofile): Observable<any> {
    const profileInfo = JSON.stringify(profile);
    const httpOptions = {
      headers: new HttpHeaders(
        {

          'Content-Type': 'application/json'
        })
    }
    return this.http.put('https://fierce-retreat-89553.herokuapp.com/v1/startup-profile', profileInfo, httpOptions)
  }

  createProject(projects: project): Observable<any> {
    const project = JSON.stringify(projects);
    const httpOptions = {
      headers: new HttpHeaders(
        {

          'Content-Type': 'application/json'
        })
    }
    return this.http.post('https://fierce-retreat-89553.herokuapp.com/v1/startup-project', project, httpOptions);

  }
  getProject(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {

          'Content-Type': 'application/json'
        })
    }
    return this.http.get('https://fierce-retreat-89553.herokuapp.com/v1/startup-project/user', httpOptions);
  }
}
