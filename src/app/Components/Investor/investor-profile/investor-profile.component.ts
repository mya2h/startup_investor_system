import { Component, OnInit, ViewChild } from '@angular/core';
import { startupprofile } from '../../../Model/startupprofile';
import { StartupProfileService } from '../../../Services/startup-profile.service'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
 investmentWant = ['Grant', 'Dept', 'Revenue Sharing','Equity','Convertible note','Lease financing']; 
 haveMade: ICheckBoxItem[] = [];
 checkedList=[];
 @ViewChild('ref', { static: true }) ref;

 wantToMake: ICheckBoxItem[] = [];
  public ownerForm: FormGroup;
  public array :FormArray
  constructor(private profile: StartupProfileService) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      option: new FormControl('', [Validators.maxLength(20)]),
      country: new FormControl('', [Validators.maxLength(20)]),
      investon: new FormControl(''),
      havemade: new FormControl(''),
      wanttomake: new FormControl(''),
      target: new FormControl(''),
      ticketsize: new FormControl('', [Validators.maxLength(20)]),
      preferredticketsize: new FormControl(''),
      thesis: new FormControl()

    });



  }
  public createOwner = (ownerFormValue) => {

    console.log(this.getCheckboxes());
  
    }
    getCheckboxes() {
  return this.investmentHaveMade.filter(x => x.checked === true).map(x => x.name)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ;
     
    }
  
    
}
