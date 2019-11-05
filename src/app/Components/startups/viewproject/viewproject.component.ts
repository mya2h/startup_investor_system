import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StartupsStartupsComponent } from '../startups-startups/startups-startups.component';
import { DialogData } from '../startups-startups/startups-startups.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddProgressComponent} from '../add-progress/add-progress.component'
import { ActivatedRoute } from '@angular/router';
import {StartupProfileService} from '../../../Services/startup-profile.service'
import { async } from 'rxjs/internal/scheduler/async';
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


  constructor (private _formBuilder: FormBuilder,private dialog:MatDialog ,private activeRoute:ActivatedRoute,private detail:StartupProfileService) {}
 
  
  ngOnInit() {
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
    // console.log("i got my id",this.id)
    // console.log("how about this",this.projectDetail);
  }
  addProgress(mine){
    this.dialog.open(AddProgressComponent,{
      width: '250px',
      data: {
        id:mine
      }
    })
  }
}
