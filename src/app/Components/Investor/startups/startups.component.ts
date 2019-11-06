import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material';
import {InvestorProfileService} from '../../../Services/investor-profile.service'
import { investorProfile } from 'src/app/Model/investorProfile';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { project } from '../../../Model/project';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
  projects = [];
  public displayedColumns = ['name', 'sector', 'industry_type',
    'current_capital', 'maximum_fund', 'current_status',
    'details'];
  public dataSource = new MatTableDataSource<project>();  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;  
  constructor(private investor:InvestorProfileService) { }
  ngOnInit() {
    this.projectsInvestedOn()
};
ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}
  projectsInvestedOn(){
    this.investor.projectInvestedOn().subscribe(data=>{
      data.message.forEach(element => {
        this.projects.push(element.startup_id);
      });
    this.dataSource.data = this.projects as project[];
    console.log(this.dataSource.data);
    })

  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
 
}




