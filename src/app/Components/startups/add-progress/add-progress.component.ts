import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {StartupProfileService} from '../../../Services/startup-profile.service';
import {progress} from '../../../Model/progress'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../Investor/explore/explore.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorService} from '../../../Services/error.service';
@Component({
  selector: 'app-add-progress',
  templateUrl: './add-progress.component.html',
  styleUrls: ['./add-progress.component.css']
})
export class AddProgressComponent implements OnInit {
  public progress:FormGroup;
  private dialogConfig;
  constructor(
    public dialogRef: MatDialogRef<AddProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar:MatSnackBar,
    private errorService:ErrorService,
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
    console.log(prog);
    this.addProgress.addProgress(prog,id).subscribe(data=>{
      console.log(data);
      this._snackBar.open("Progress successfully updated", "", {
        duration: 2000,
      });
    },(error => {
      console.log(error);
    })
    )
    
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}


}
