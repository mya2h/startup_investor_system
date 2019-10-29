import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import {ProjectService } from '../../../Services/project.service'
import { project } from 'src/app/Model/project';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';
import {ErrorService} from '../../../Services/error.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map } from 'rxjs/operators';
export interface Subject {
  name: string
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  SubjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  private dialogConfig;
  public ownerForm: FormGroup;
  constructor(private location: Location,private project:ProjectService,private dialog: MatDialog,private errorService: ErrorService) { }
  
  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      sectorselector:new FormControl('', [Validators.required]),
      description:new FormControl('',[ Validators.maxLength(100)]),
      funduneed:new FormControl('', [Validators.required]),
      funduhave:new FormControl('', [Validators.required]),
      industrySelector:new FormControl('', [Validators.required]),
      progress:new FormControl('', [Validators.required]),
      subjects:new FormControl(this.SubjectsArray),
      representative:new FormControl('',[Validators.required])
    });
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.SubjectsArray.length < 5) {
      this.SubjectsArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
    /* Remove dynamic languages */
    remove(subject: Subject): void {
      const index = this.SubjectsArray.indexOf(subject);
      if (index >= 0) {
        this.SubjectsArray.splice(index, 1);
      }
    }  
 
  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      const newVal = ownerFormValue.subjects.map(o=>o.name);                                                                                                                                      
      console.log("my new val",newVal);
      console.log(ownerFormValue.subjects.name);
      console.log()
     const project:project={
      name:ownerFormValue.name,
      sector:ownerFormValue.sectorselector,
      industry_type:ownerFormValue.industrySelector,
      description:ownerFormValue.description,
      maximum_fund:ownerFormValue.funduneed,
      current_capital:ownerFormValue.funduhave,
      current_status:ownerFormValue.progress,
      team_members:newVal,
      representative_id:ownerFormValue.representative
    }
    this.project.createProject(project).subscribe(data=>{
      console.log(data);
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
 
    //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
        this.location.back();
      });
    },
    (error => {
      this.errorService.dialogConfig = { ...this.dialogConfig };
      this.errorService.handleError(error);
      console.log(error);
      console.log(error.error.message.error[0].message);
    })
  );

    }
  }
 

}
