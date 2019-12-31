import { Component, OnInit } from '@angular/core';
import { IFriendlist } from "../../dashboard";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
showDashboard: boolean = true;
friendsname : IFriendlist[];
activedash= true ;
activerecent;
activeTab = 'dash';
showRecent : boolean = false;
showFriendExpense : boolean = false;
selectedFriend : any;



  constructor() {
/*     let myVariable : any;
    myVariable();
    myVariable.toUpperCase();
    myVariable.name */
/*     let a : number | boolean;
    a = true
    a=10 */
    
    this.friendsname =[
    { name : 'Dipanshu Pathak' },
    { name : 'Achin' },
    { name : 'Karan Singham' },
    { name : 'Namrata' },
    { name : 'Naren Yadav' },
    { name : 'Pankaj Experdel' },
    { name : 'Pratik Bokey' },
    { name : 'Sandeep Vyas' },
    { name : 'Ubedullah' }
  ] 

}


  ngOnInit() {
    
  }
dashboard(){
  this.activedash = true;
  this.activerecent = false;
  this.showDashboard = true;
  this.showRecent = false;
}


recent(){
  this.activedash = false;
  this.activerecent = true;
  this.showDashboard = false;
  this.showRecent = true;
}

onSelectFriend(friend){
  this.selectedFriend = friend;
  console.log(this.selectedFriend)
  this.showFriendExpense = true;
  this.showDashboard = false;
  this.showRecent = false;
}
}
