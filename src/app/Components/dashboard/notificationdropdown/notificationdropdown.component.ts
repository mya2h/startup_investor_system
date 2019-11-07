import { Component, OnInit } from '@angular/core';
import {StartupProfileService} from '../../../Services/startup-profile.service'
@Component({
  selector: 'app-notificationdropdown',
  templateUrl: './notificationdropdown.component.html',
  styleUrls: ['./notificationdropdown.component.css']
})
export class NotificationdropdownComponent implements OnInit {

  constructor(private notify:StartupProfileService) { }
  notfication =[]
  ngOnInit() {
    this.getNotfication();
    console.log("zdjgasgdahgsdg");

  }
  getNotfication(){
    this.notify.getallNotfication().subscribe(data=>{
      console.log(data);
     this.notfication = data.message.slice(0,4);
    })
  }

}
