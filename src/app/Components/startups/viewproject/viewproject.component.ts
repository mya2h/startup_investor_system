import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StartupsStartupsComponent } from '../startups-startups/startups-startups.component';
import { DialogData } from '../startups-startups/startups-startups.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddProgressComponent} from '../add-progress/add-progress.component'
import { ActivatedRoute } from '@angular/router';
import {AddTeamComponent} from '../add-team/add-team.component'
import {StartupProfileService} from '../../../Services/startup-profile.service'
import { async } from 'rxjs/internal/scheduler/async';
import { LoginService } from 'src/app/Services/login.service';
interface member{
  user:string
}

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {
  id:string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  projectDetail:any;
  dataMessage = [];
  investor = []
  role:String;

  constructor (
    private _formBuilder: FormBuilder,
    private dialog:MatDialog ,
    private activeRoute:ActivatedRoute,
    private detail:StartupProfileService,
    private logservice:LoginService) {}
 
  
  ngOnInit() {
    this.getDetailData();
    this.investors();
    // console.log("i got my id",this.id)
    // console.log("how about this",this.projectDetail);
  }
  getDetailData(){
    this.activeRoute.params.subscribe(
      param =>{
        this.id=param['id']
      }
    );
    this.detail.getSingleProject(this.id).subscribe(data=>{
      this.dataMessage.push(data.message['startup']);
      this.dataMessage.push(data.message['all_progress']);
    })
    console.log("my message",this.dataMessage);
  }
  investors(){
    this.detail.getVerifiedInvestorsOne(this.id).subscribe(data=>{
      this.investor.push(data.message);
      console.log(this.investor);
    })
  }
  addProgress(mine){
    this.dialog.open(AddProgressComponent,{
      width: '400px',
      data: {
        id:mine
      }
    }).afterClosed()
    .subscribe(result=>{
      this.getDetailData();
    })
  }
  addTeam(team1){
    this.dialog.open(AddTeamComponent,{
      width: '400px',
      data: {
        id:team1
      }
    }).afterClosed()
    .subscribe(result=>{
      this.getDetailData();
    })
   
  }
  remove(id,email){
    const team_member:member={
      user:email
    }
    console.log(team_member);
    console.log(id,email);
    this.detail.removeTeam(id,team_member).subscribe(data=>{
      console.log(data);
    })
    // console.log(id,email);
  }
  getrole(){
    this.role=this.logservice.getRole();
    if(this.role=="investor"){
     return true;
    }
    else{
      return false;
    }
  }
}
