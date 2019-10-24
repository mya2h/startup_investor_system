import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service';

@Component({
  selector: 'app-investor-land',
  templateUrl: './investor-land.component.html',
  styleUrls: ['./investor-land.component.css']
})
export class InvestorLandComponent implements OnInit {

  constructor(private logservice : LoginService) { }

  ngOnInit() {
  }

}
