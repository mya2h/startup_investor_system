import { Component, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DialogData} from '../explore/explore.component'
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  dialogTitle: string;
  dialogText: string;
  
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  ngOnInit() {

  }

}
