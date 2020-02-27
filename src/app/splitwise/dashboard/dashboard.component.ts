import { Component, OnInit } from '@angular/core';
import { IFriendlist } from "../../dashboard";
import { NgxSpinnerService } from "ngx-spinner";
import { Event, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RouterEvent} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showDashboard: boolean = true;
  friendsname: IFriendlist[];
  activedash = true;
  activerecent;
  activeTab = 'dash';
  showRecent: boolean = false;
  showFriendExpense: boolean = false;
  selectedFriend: any;
  showLoading: boolean = false;

  constructor(private router: Router,private spinner: NgxSpinnerService,) {
    /*     let myVariable : any;
        myVariable();
        myVariable.toUpperCase();
        myVariable.name */
    /*     let a : number | boolean;
        a = true
        a=10 */

    this.friendsname = [
      { name: 'Dipanshu Pathak' },
      { name: 'Achin' },
      { name: 'Karan Singham' },
      { name: 'Namrata' },
      { name: 'Naren Yadav' },
      { name: 'Pankaj Experdel' },
      { name: 'Pratik Bokey' },
      { name: 'Sandeep Vyas' },
      { name: 'Ubedullah' }
    ]

  }


  ngOnInit() {
  //  this.spinner.show();
    this.showLoading = true;
    setTimeout(() => {
    // this.spinner.hide();
    this.showLoading = false
   }, 2000);
  }
  dashboard() {
    this.activedash = true;
    this.activerecent = false;
    this.showDashboard = true;
    this.showRecent = false;
    this.showFriendExpense = false;
  }


  recent() {
    this.activedash = false;
    this.activerecent = true;
    this.showDashboard = false;
    this.showRecent = true;
    this.showFriendExpense = false;
  }

  onSelectFriend(friend) {
    this.selectedFriend = friend;
    console.log(this.selectedFriend)
    this.showFriendExpense = true;
    this.showDashboard = false;
    this.showRecent = false;
  }

  matDemo() {
    this.router.navigate(['mat-demo1'])
  }
}
