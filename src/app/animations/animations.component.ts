import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {

  constructor( private wowServ : NgwWowService, private router: Router ) {
    router.events.subscribe((event: Event)=>{
      if (event instanceof NavigationEnd) {
        this.wowServ.init(); 
    }
    })
   }

  ngOnInit() {
  }

  

}
