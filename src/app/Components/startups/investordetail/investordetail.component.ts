import { Component, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DialogData} from '../startups-explore/startups-explore.component'
@Component({
  selector: 'app-investordetail',
  templateUrl: './investordetail.component.html',
  styleUrls: ['./investordetail.component.css']
})
export class InvestordetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InvestordetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
  }

}
