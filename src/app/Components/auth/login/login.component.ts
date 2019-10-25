import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../Services/login.service';
import {User} from '../../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selected: string;
  constructor(private loginservice:LoginService,private router:Router) { }
  login(email:string,password:string,role:string){
   const value:User ={
      email:email,
      password:password,
      role:role
   }
   console.log(value);
   this.loginservice.authenticate(value).subscribe(data=>{
    

        localStorage.setItem('token',data.token);
        console.log(data.token);
        // this.router.navigate(['/investor-land']);
        this.router.navigate(['/dashboard']);
        console.log(value.role);
        localStorage.setItem('role',value.role);


   },err=>console.log(err)
   );
  
  }
  ngOnInit() {
  }

}
