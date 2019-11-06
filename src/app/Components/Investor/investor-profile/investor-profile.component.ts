import { Component, OnInit, ViewChild } from '@angular/core';
import { investorProfile } from '../../../Model/investorProfile';
import { InvestorProfileService } from '../../../Services/investor-profile.service'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorService } from '../../../Services/error.service';
interface ICheckBoxItem {
  selected: boolean;
  name: string;
}


@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.css']
})
export class InvestorProfileComponent implements OnInit {
  private dialogConfig;
  investmentHaveMade = [{
    name: 'Grant',
    value: 'Grant',
    checked: false
  }, {
    name: 'Dept',
    value: 'Dept',
    checked: false
  },
  {
    name: 'Revenue Sharing',
    value: 'Revenue Sharing',
    checked: false
  },
  {
    name: 'Equity',
    value: 'Equity',
    checked: false
  },
  {
    name: 'Convertible note',
    value: 'Convertible note',
    checked: false
  },
  {
    name: 'Lease financing',
    value: 'Lease financing',
    checked: false
  }
  ];
  //  investmentHaveMade = ['Grant', 'Dept', 'Revenue Sharing','Equity','Convertible note','Lease financing'];
  investmentWant = ['Grant', 'Dept', 'Revenue Sharing', 'Equity', 'Convertible note', 'Lease financing'];
  startupStage = ["Idea stage", "Established track record", "Prototype stage(pre-revenue)", "Post-revenue with traction"]
  haveMade: ICheckBoxItem[] = [];
  checkedList = [];
  @ViewChild('ref', { static: true }) ref;
  min:number
  max:number
  wantToMake: ICheckBoxItem[] = [];
  public ownerForm: FormGroup;
  public array: FormArray
  constructor(
    private profile: InvestorProfileService,
    private _snackBar:MatSnackBar,
    private errorService:ErrorService
    ) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      option: new FormControl('', [Validators.maxLength(20)]),
      city: new FormControl('', [Validators.maxLength(20)]),
      country: new FormControl('', [Validators.maxLength(20)]),
      investon: new FormControl(''),
      target: new FormControl(''),
      ticketsize: new FormControl('', [Validators.maxLength(20)]),
      thesis: new FormControl(''),
      startupStage: new FormArray([]),
      myChoices: new FormArray([]),
      investmentWant: new FormArray([])

    });



  }  
  public createOwner = (ownerFormValue) => {

   if(ownerFormValue.ticketsize=="val1"){
    this.min = 10
    this.max = 50000
    console.log(this.min);
   }
   if(ownerFormValue.ticketsize=="val2"){
    this.min = 50000
    this.max = 100000
   }
   if(ownerFormValue.ticketsize=="val3"){
    this.min = 100000
    this.max = 500000
   }
   if(ownerFormValue.ticketsize=="val4"){
    this.min = 500000
    this.max = 1000000
  }
    const profile: investorProfile = {
      type: ownerFormValue.option,
      country: ownerFormValue.country,
      city: ownerFormValue.city,
      investment_sector: ownerFormValue.investon,
      type_of_investoments_made_before: ["JDSFGDF"],
      type_of_investoments_planning_to_make: ["dsjghdfg"],
      stage_of_startup: ownerFormValue.startupStage,
      investment_ticket_size_min:this.min,
      investment_ticket_size_max: this.max,
      investment_thesis: ownerFormValue.thesis
    }
    this.profile.createProfile(profile).subscribe(data => {
      console.log(data);
    })
    let ownersList: Array<string> = [];
    ownerFormValue.myChoices.map(
      data => {
        ownersList.push(data.toString());
        console.log(data);
        this._snackBar.open("profile updated successfully", "", {
          duration: 2000,
        });
      }, (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
        console.log(error);
        console.log(error.error.message.message);
      }))

  }
  onCheckChange(event) {
    const formArray: FormArray = this.ownerForm.get('myChoices') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    }
    else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onInvestmentWant(event) {
    const investWant: FormArray = this.ownerForm.get('investmentWant') as FormArray;

    if (event.target.checked) {
      investWant.push(new FormControl(event.target.value));
      console.log(event.target.value);
    }
    else {
      let i: number = 0;
      investWant.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          investWant.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onstartupStage(event) {
    const startupStage: FormArray = this.ownerForm.get('startupStage') as FormArray;

    if (event.target.checked) {
      startupStage.push(new FormControl(event.target.value));
      console.log(event.target.value);
    }
    else {
      let i: number = 0;
      startupStage.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          startupStage.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
