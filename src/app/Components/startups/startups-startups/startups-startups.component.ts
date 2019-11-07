import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { StartupProfileService } from '../../../Services/startup-profile.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ViewprojectComponent } from '../viewproject/viewproject.component'
import { from } from 'rxjs';
import { project } from '../../../Model/project'
import { DataSource } from '@angular/cdk/table';
import { ProjectComponent } from '../project/project.component';
import {DeleteprojectComponent} from '../deleteproject/deleteproject.component'
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-startups-startups',
  templateUrl: './startups-startups.component.html',
  styleUrls: ['./startups-startups.component.css']
})
export class StartupsStartupsComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['name', 'sector', 'industry_type',
    'current_capital', 'maximum_fund', 'current_status',
    'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<project>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private profile: StartupProfileService, private dialog: MatDialog) { }
  animal: string;
  name: string;
  ngOnInit() {
    this.getAllProjects();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getAllProjects() {
    this.profile.getProject().subscribe(res => {
      this.dataSource.data = res as project[];
      console.log(this.dataSource.data);
    })
  }

  public redirectToDetails = (id: string) => {
    
  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete(id){
    this.dialog.open(DeleteprojectComponent,{
      width:'500px',
      data:{
        id:id
      }
    }).afterClosed()
    .subscribe(result=>{
      this.getAllProjects()
    })

  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  openDialog() {
    const dialogRef = this.dialog.open(ViewprojectComponent, {
      width: '250px',
      data: this.dataSource.data
  });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  openProjectDialog() {
    const dialogRef = this.dialog.open(ProjectComponent, {
      width: '700px',
      data: this.dataSource.data
    });

    dialogRef.afterClosed()
    .subscribe(result=>{
      this.getAllProjects()
    })
  }
}

