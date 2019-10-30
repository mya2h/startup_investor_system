import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { project } from '../Model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
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
}
