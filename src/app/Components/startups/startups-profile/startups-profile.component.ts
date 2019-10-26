import { Component, OnInit } from '@angular/core';
import {startupprofile} from '../../../Model/startupprofile';
import {StartupProfileService} from '../../../Services/startup-profile.service'

@Component({
  selector: 'app-startups-profile',
  templateUrl: './startups-profile.component.html',
  styleUrls: ['./startups-profile.component.css']
})
export class StartupsProfileComponent implements OnInit {

  constructor(private profile:StartupProfileService) { }

  ngOnInit() {
    const profile:startupprofile={
        first_name:"hena",
        last_name:"fufa",
        email:"honeyfuf@gmail.com",
        phone_number:1234556,
        profile:"akjshdas",
        birth_date:"",
        address:"",
        education_background:"sldjs",
        work_experiance:"sjdsjd"
    }
    this.profile.createProfile(profile).subscribe(data=>{
      console.log(data);
    })
  }

}
