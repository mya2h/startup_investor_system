import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import {InvestorProfileService} from '../../../Services/investor-profile.service'
import { investorProfile } from 'src/app/Model/investorProfile';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
 agriculture =[]
 technology =[]
 pagedListTech =[] 
 pagedListAgri =[] 
  constructor(private investorProfile:InvestorProfileService) { }
  ngOnInit() {
   this.investorProfile.getStartupProject().subscribe(data=>{
     console.log(data);
     data.map(res=>{
      if(res.sector=="technology"){
       this.technology.push(res);  
      }
      else if(res.sector="agriculture"){
        this.agriculture.push(res);
      }
      
     })
     this.pagedListTech = this.technology.slice(0, 3);
     this.pagedListAgri = this.agriculture.slice(0, 3);
   })
 

};

}




