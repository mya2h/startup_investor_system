import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../Investor/explore/explore.component';
import { StartupProfileService } from '../../../Services/startup-profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteprojectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private project:StartupProfileService,private route:Router) { }

  ngOnInit() {
  }
  
  public close() {
    this.dialogRef.close();
  }
  public delete(id) {
   this.project.deleteProject(id).subscribe(data=>{
      console.log(data);
      if(data.message){
        this.close();
      }
   })
  
 
  }

}
