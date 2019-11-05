import { Component, OnInit } from '@angular/core';
import {StartupProfileService} from '../../../Services/startup-profile.service'
import { MatTableDataSource } from '@angular/material/table';
import {verifyInvestor} from '../../../Model/verifyinvestor';
@Component({
  selector: 'app-requestdropdown',
  templateUrl: './requestdropdown.component.html',
  styleUrls: ['./requestdropdown.component.css']
})
export class RequestdropdownComponent implements OnInit {
  public dataSource = new MatTableDataSource<Element>();
  public displayedColumns = ['investment_type', 'confirm', 'delete'];
   constructor(private request:StartupProfileService) { }
 
   ngOnInit() {
     this.request.getUnVerifiedStartups().subscribe(data=>{ 
       const smallRequest = []
       smallRequest.push(data.message.slice(0,4))
       console.log("my data message",smallRequest);
       this.dataSource = new MatTableDataSource < Element > (data.message.slice(0,4));
       console.log("my data source",this.dataSource.data);
     })
    
   }
   confirmUser(startup,investor){
     const verify:verifyInvestor={
       startup_id:startup,
       investor_id:investor
     }
     console.log(verify);
     this.request.verifyUser(verify).subscribe(data=>{
       console.log(data);
 
     })
   }
 

}
