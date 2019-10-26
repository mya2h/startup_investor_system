import { Component, OnInit } from '@angular/core';
import {InvestorProfileService} from '../../../Services/investor-profile.service';
import {investorProfile} from '../../../Model/investorProfile';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-investor-profile',
  templateUrl: './investor-profile.component.html',
  styleUrls: ['./investor-profile.component.css']
})
export class InvestorProfileComponent implements OnInit {

  constructor(private investorproservice:InvestorProfileService) { }
  //  const value: investorProfile={
     
  //  }
  ngOnInit() {
    const value:investorProfile={
      type:"company",
      city:"newyork",
      country:"america",
      investment_sector:"health",
      type_of_investoments_made_before:["grant"],
      type_of_investoments_planning_to_make:["grant"],
      stage_of_startup:"ideastage",
      investment_ticket_size_min:567,
      investment_ticket_size_max:4567,
      investment_thesis:"under",

    }
    this.investorproservice.createProfile(value).subscribe(data=>{
      console.log(data);
    })
  }

}
