import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { StartupProfileService } from '../../../Services/startup-profile.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddProgressComponent } from '../add-progress/add-progress.component';
import { DialogData } from '../../Investor/explore/explore.component';
import { team } from '../../../Model/team'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorService } from '../../../Services/error.service';
export interface user {
  email: string
}
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  durationInSeconds = 3;
  visible = true;
  selectable = true;
  errorMessage:string
  removable = true;
  addOnBlur = true;
  private dialogConfig;
  @ViewChild('chipList', { static: false }) chipList;
  memberArray: user[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public ownerForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private errorService: ErrorService,
    private _snackBar: MatSnackBar,
    private addteam: StartupProfileService) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      team: new FormControl(this.memberArray),
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim() && this.memberArray.length < 5) {
      this.memberArray.push({ email: value.trim() })
    }

    if (input) {
      input.value = '';
    }
  }

  remove(team: user): void {
    const index = this.memberArray.indexOf(team);
    if (index >= 0) {
      this.memberArray.splice(index, 1);
    }
  }
  public createOwner = (ownerFormValue, id) => {
    console.log("this",ownerFormValue.team);
    const newVal = ownerFormValue.team.map(o=>o.email);
    const newTeam: team = {
      team_members: newVal
    } 
    console.log(newVal);  
    this.addteam.addTeam(newTeam, id).subscribe(data => {
      console.log(data);
      this._snackBar.open("new team added", "", {
        duration: 2000,
      });
    }, (error => {
  
      console.log(error);
      if(error.error){
        this.errorMessage = error.error.message.error
        console.log(error.error.message.error);
      }
      else{
      this.errorService.dialogConfig = { ...this.dialogConfig };
      this.errorService.handleError(error);
      }

    }))
  }

}
