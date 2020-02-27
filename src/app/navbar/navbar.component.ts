import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
dashactive: boolean = false;
orgactive: boolean = false;
gstactive: boolean = false;
payactive: boolean = false;
useractive: boolean = false;
cardactive: boolean = false;
rightactive: boolean = false;
rolename: any = 'as'
url: string
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url.replace('/',''))
    this.url = this.router.url.replace('/','')
    if(this.url == 'navbar'){
      this.dashactive= true;
    }
  }


  dashEvent(){
   this.orgactive = false;
   this.gstactive = false;
   this.payactive = false;
    this.useractive = false;
    this.cardactive = false;
    this.rightactive = false;
    this.dashactive = true;
  }
  orgEvent(){
    this.dashactive = false;
    this.gstactive = false;
    this.payactive = false;
     this.useractive = false;
     this.cardactive = false;
     this.rightactive = false;
     this.orgactive = true;
  }
  gstEvent(){
    this.dashactive = false;
    this.orgactive = false;
    this.payactive = false;
     this.useractive = false;
     this.cardactive = false;
     this.rightactive = false;
     this.gstactive = true;
  }
  payEvent(){
    this.dashactive = false;
    this.orgactive = false;
    this.gstactive = false;
     this.useractive = false;
     this.cardactive = false;
     this.rightactive = false;
    this.payactive = true;
  }
  userEvent(){
    this.dashactive = false;
    this.orgactive = false;
    this.gstactive = false;
    this.payactive = false;
     this.cardactive = false;
     this.rightactive = false;
     this.useractive = true;
  }
  cardEvent(){
    this.dashactive = false;
    this.orgactive = false;
    this.gstactive = false;
    this.payactive = false;
     this.useractive = false;
     this.rightactive = false;
     this.cardactive = true;
  }
  rightEvent(){
    this.dashactive = false;
    this.orgactive = false;
    this.gstactive = false;
    this.payactive = false;
     this.useractive = false;
     this.cardactive = false;
     this.rightactive = true;
  }
  

}
