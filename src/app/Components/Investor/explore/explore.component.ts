import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import {InvestorProfileService} from '../../../Services/investor-profile.service'
import { investorProfile } from 'src/app/Model/investorProfile';
import { FormControl } from '@angular/forms';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProjectComponent } from '../../startups/project/project.component';
import {ProjectDetailComponent} from '../project-detail/project-detail.component';
import {search} from '../../../Model/searchproject'
export interface DialogData{
   id:string,
   sector:string,
   description:string,
   industryType:string,
   fundNeed:Number,
   capital:Number,
   status:string
}
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  
  sector=["All projects","Technology","Agriculture"]
  selectedDay=this.sector[0]
  durationInSeconds = 5;
  agriculture =[]
  technology =[]
  allProjects = []
   constructor(private investorProfile:InvestorProfileService,private dialog: MatDialog) { }
   ngOnInit() {
   this.explore();
   this.exploreAgriculture();
 
 }
 changeClient(value) {
  this.selectedDay=value;
  console.log("my value",this.selectedDay);
  return this.selectedDay;
}
readMore(id,sector,description,industryType,fundNeed,capital,status){
  const dialogRef = this.dialog.open(ProjectDetailComponent, {
    width: '500px',
    data: {
      id:id,
      sector:sector,
      description:description,
      industryType:industryType,
      fundNeed:fundNeed,
      capital:capital,
      status:status}
  });
  dialogRef.afterClosed().subscribe(result => {
    this.explore();
  });
}
explore(){
  const explore:search={
    sector:"technology"
  }
  this.investorProfile.exploreProject(explore).subscribe(data=>{
    console.log("explore",data);
    this.technology = data; 
    data.map(res=>{
      this.allProjects.push(res);
    })
  })
}
exploreAgriculture(){
  const explore:search={
    sector:"agriculture"
  }
  this.investorProfile.exploreProject(explore).subscribe(data=>{
    console.log("explore",data);
    this.agriculture = data; 
    data.map(res=>{
      this.allProjects.push(res);
    })
  })
}
}
