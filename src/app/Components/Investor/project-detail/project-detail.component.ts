import { Component, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DialogData} from '../explore/explore.component'
import {InvestorProfileService} from '../../../Services/investor-profile.service';
import {projectRequest} from '../../../Model/projectRequest'
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  dialogTitle: string;
  dialogText: string;
  success:boolean
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private request:InvestorProfileService
    ) {}


  ngOnInit() {

  }
  connectMe(id,type){
    const requestType:projectRequest={
      startup_id:id,
      investment_type:type
    }
   this.request.projectRequest(requestType).subscribe(data=>{
     console.log(data);
     if(data.success){
       this.success = true
     }
   })
 
  }
  ngAfterViewInit() {
    if(this.success)
    (document.querySelector('.connect') as HTMLElement).style.width = '700px';
}
  // openSnackBar() {
  //   this._snackBar.openFromComponent(SuccessDialogComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }
}
