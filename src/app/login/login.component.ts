import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  res_token = "logintoken"
  username : any;
  password : any;
  constructor(private router: Router, private toastr : ToastrService ) { }

  ngOnInit() {
  }

  login(){
    if(this.username == "imran123" && this.password == "imran@123" ){
      console.log("Logged In")
      localStorage.setItem('token', this.res_token )
      this.toastr.success("Succesfully Logged In", "Alert",{
        timeOut : 3000,
        positionClass : 'toast-top-center'
      })
      this.router.navigate(['dashboard'])
    }
    else if(this.username == null || this.password == null || this.username == "" || this.password == ""){
      console.log("Wrong Credentials")
      this.toastr.error("Please Enter your Credentials","Alert",{
        timeOut:3000,
        positionClass:'toast-top-center'
      })
    }
    else{
      this.toastr.error("Wrong Credentials","Alert",{
        timeOut : 3000,
        positionClass : 'toast-top-center'
      })
    }
  }

}
