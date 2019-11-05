import { Component, OnInit, ViewChild } from '@angular/core';
import {StartupProfileService} from '../../../Services/startup-profile.service'
import { MatTableDataSource } from '@angular/material/table';
import {verifyInvestor} from '../../../Model/verifyinvestor';
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
 public dataSource = new MatTableDataSource<Element>();
 public displayedColumns = ['investment_type', 'confirm', 'delete'];
 @ViewChild(MatSort, { static: false }) sort: MatSort;
 @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private request:StartupProfileService) { }

  ngOnInit() {
    this.request.getUnVerifiedStartups().subscribe(data=>{
      this.dataSource = new MatTableDataSource < Element > (data.message);
      console.log(this.dataSource.data);
    })
   
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
