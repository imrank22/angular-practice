import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RouterEvent} from "@angular/router";
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TestApp';
  showLoading: boolean = false;
  constructor(private router: Router){
    this.router.events.subscribe((routerEvent: Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoading = true;
      }
      else if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.showLoading= false;
      }
    })
  }

  ngOnInit(){
    AOS.init();
  }

}
