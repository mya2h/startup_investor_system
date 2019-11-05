import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-startups-home',
  templateUrl: './startups-home.component.html',
  styleUrls: ['./startups-home.component.css']
})
export class StartupsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  doughnutChartLabels: Label[] = ['Technology', 'Agriculture', 'Fashion'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 0]
  ];
  doughnutChartType: ChartType = 'doughnut';
}
