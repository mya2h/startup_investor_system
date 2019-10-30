import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StartupsStartupsComponent } from '../startups-startups/startups-startups.component';
import { DialogData } from '../startups-startups/startups-startups.component';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StartupsStartupsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
