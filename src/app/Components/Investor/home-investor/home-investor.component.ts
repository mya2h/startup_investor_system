import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts'; 
@Component({
  selector: 'app-home-investor',
  templateUrl: './home-investor.component.html',
  styleUrls: ['./home-investor.component.css']
})
export class HomeInvestorComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
   
  doughnutChartLabels: Label[] = ['Technology', 'Agriculture', 'Fashion'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 0]
  ];
  doughnutChartType: ChartType = 'doughnut';
}
