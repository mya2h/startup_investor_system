import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {InvestorProfileService} from '../../../Services/investor-profile.service'
@Component({
  selector: 'app-startupdescription',
  templateUrl: './startupdescription.component.html',
  styleUrls: ['./startupdescription.component.css']
})
export class StartupdescriptionComponent implements OnInit {
  id:string;
  constructor(
    private activeRoute:ActivatedRoute,
    private detail:InvestorProfileService
  ) { }

  ngOnInit() {
    this.getDetailData();
  }
  getDetailData(){
    this.activeRoute.params.subscribe(
      param =>{
        this.id=param['id']
      }
    );
    this.detail.getProjectDetail(this.id).subscribe(data=>{
      console.log("my data",data);
    })

    console.log("my message");
  }
}
