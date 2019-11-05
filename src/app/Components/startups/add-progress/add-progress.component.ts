import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {StartupProfileService} from '../../../Services/startup-profile.service';
import {progress} from '../../../Model/progress'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../Investor/explore/explore.component';
@Component({
  selector: 'app-add-progress',
  templateUrl: './add-progress.component.html',
  styleUrls: ['./add-progress.component.css']
})
export class AddProgressComponent implements OnInit {
  public progress:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private addProgress:StartupProfileService) { }
  fileToUpload: File = null;
  ngOnInit() {
    this.progress = new FormGroup({
      title:new FormControl('', [Validators.required]),
      description:new FormControl('',[Validators.required])
    })
    
  }

  progressAdd=(formvalue,id)=>{
    console.log(formvalue.title);
    console.log(formvalue.description);
    console.log(this.fileToUpload);
    console.log(id);
    const prog:progress={
      title:formvalue.title,
      description:formvalue.description,
      report:this.fileToUpload
    }
    this.addProgress.addProgress(prog,id).subscribe(data=>{
      console.log(data);
    })
    
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    // console.log(this.fileToUpload);
}


}
