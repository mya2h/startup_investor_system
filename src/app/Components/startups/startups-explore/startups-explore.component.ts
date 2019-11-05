import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import {StartupProfileService} from '../../../Services/startup-profile.service'
import { investorProfile } from 'src/app/Model/investorProfile';
import { FormControl } from '@angular/forms';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProjectComponent } from '../../startups/project/project.component';
import{InvestorProfileComponent} from '../investor-profile/investor-profile.component'
import {InvestordetailComponent} from '../investordetail/investordetail.component'
import { ViewprojectComponent } from '../viewproject/viewproject.component';
export interface DialogData{
  id:string,
  sector:string,
  thesis:string,
  stage:string[],
  made:string[],
  make:string[],
}
@Component({
  selector: 'app-startups-explore',
  templateUrl: './startups-explore.component.html',
  styleUrls: ['./startups-explore.component.css']
})
export class StartupsExploreComponent implements OnInit {
  sector=["All investors","Individual","Company"]
  selected=this.sector[0]
  durationInSeconds = 5;
  allInvestors = []
  individual =[]
  company =[]
  constructor(private startup:StartupProfileService,private dialog:MatDialog) { }

  ngOnInit() {
    this.startup.getAllInvestors().subscribe(data=>{
      this.allInvestors = Array.from(Object.keys(data), k=>data[k]);
      data.map(res=>{
       if(res.type=="individual"){
        this.individual.push(res);  
       }
       else if(res.sector="company"){
         this.company.push(res);
       }
       
      })
      console.log("individual",this.individual);
      console.log("company",this.company);
      console.log("all",this.allInvestors);
  })
}
  changeClient(value) {
    this.selected=value;
    console.log("my value",this.selected);
    return this.selected;
  }
  readMore(id,sector,thesis,stage,made,make){
    const dialogRef = this.dialog.open(InvestordetailComponent, {
      width: '800px',
      data: {
        id:id,
        sector:sector,
        thesis:thesis,
        stage:stage,
        made:made,
        make:make,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
  
    });
    // tile._id,tile.investment_sector,tile.investment_thesis,tile.stage_of_startup,tile.type_of_investments_made_before,type_of_investments_planning_to_make
}
}
