import { Component, OnInit } from '@angular/core';
import {StartupProfileService} from '../../../Services/startup-profile.service'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notfication =[]
  constructor(private notify:StartupProfileService) { }

  ngOnInit() {
    this.getNotfication();
    console.log("askjd");
  }
  getNotfication(){
    this.notify.getallNotfication().subscribe(data=>{
      this.notfication = data.message;
    })
  }
}
