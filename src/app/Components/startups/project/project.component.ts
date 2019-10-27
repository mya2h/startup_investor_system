import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import {ProjectService } from '../../../Services/project.service'
import { project } from 'src/app/Model/project';
	
export interface OwnerForCreation {
    name: string;
    dateOfBirth: Date;
    address: string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public ownerForm: FormGroup;
  constructor(private location: Location,private project:ProjectService) { }
  
  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      sectorselector:new FormControl('', [Validators.required]),
      description:new FormControl('',[ Validators.maxLength(100)]),
      funduneed:new FormControl('', [Validators.required]),
      funduhave:new FormControl('', [Validators.required]),
      industrySelector:new FormControl('', [Validators.required]),
      progress:new FormControl('', [Validators.required])
    });

    // const project:project={
    //   name:"kalkidan",
    //   sector:"technology",
    //   industry_type:"both",
    //   description:"this is my project",
    //   maximum_fund:324,
    //   current_capital:4563,
    //   current_status:"idea",
    //   team_members:["5da864a60b3d8600235e0075","5dae0de58209990023a68a71"],
    //   representative_id:"5da864a60b3d8600235e0075"
    // }
    // this.project.createProject(project).subscribe(data=>{
    //   console.log(data);
    // });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
 
  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      console.log(ownerFormValue);
     const project:project={
      name:ownerFormValue.name,
      sector:ownerFormValue.sectorselector,
      industry_type:ownerFormValue.industrySelector,
      description:ownerFormValue.description,
      maximum_fund:ownerFormValue.funduneed,
      current_capital:ownerFormValue.funduhave,
      current_status:ownerFormValue.progress,
      team_members:["rozinaha1772@gmail.com","mahderhaileslasse@gmail.com"],
      representative_id:"5da864a60b3d8600235e0075"
    }
    this.project.createProject(project).subscribe(data=>{
      console.log(data);
    });

    }
  }
 

}
