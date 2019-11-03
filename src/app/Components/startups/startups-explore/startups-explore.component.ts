import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import {StartupProfileService} from '../../../Services/startup-profile.service'
import { investorProfile } from 'src/app/Model/investorProfile';
import { FormControl } from '@angular/forms';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProjectComponent } from '../../startups/project/project.component';
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
  constructor(private startup:StartupProfileService) { }

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

}
