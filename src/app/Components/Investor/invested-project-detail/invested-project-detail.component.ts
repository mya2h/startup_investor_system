import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {InvestorProfileService} from '../../../Services/investor-profile.service'
import { async } from 'rxjs/internal/scheduler/async';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-invested-project-detail',
  templateUrl: './invested-project-detail.component.html',
  styleUrls: ['./invested-project-detail.component.css']
})
export class InvestedProjectDetailComponent implements OnInit {
  id:string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  projectDetail:any;
  dataMessage = [];
  constructor(
    private _formBuilder: FormBuilder,
    private dialog:MatDialog ,
    private activeRoute:ActivatedRoute,
    private detail:InvestorProfileService,
    private logservice:LoginService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      param =>{
        this.id=param['id']
      }
    );
    this.detail.singleprojectInvestedOn(this.id).subscribe(data=>{
      console.log(data);
      // this.dataMessage.push(data.message['startup']);
      // this.dataMessage.push(data.message['all_progress']);
    })
    console.log("my message",this.dataMessage);
    // console.log("i got my id",this.id)
    // c
  }

}
