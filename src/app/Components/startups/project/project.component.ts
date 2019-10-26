import { Component, OnInit } from '@angular/core';
import {ProjectService } from '../../../Services/project.service'
import { project } from 'src/app/Model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private project:ProjectService) { }
  
  ngOnInit() {
    const project:project={
      name:"newon",
      sector:"technology",
      industry_type:"both",
      description:"this is my project",
      maximum_fund:324,
      current_capital:4563,
      current_status:"idea",
      team_members:["5da864a60b3d8600235e0075","5dae0de58209990023a68a71"],
      representative_id:"5da864a60b3d8600235e0075"
    }
    this.project.createProject(project).subscribe(data=>{
      console.log(data);
    })
  }

}
