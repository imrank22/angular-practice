import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
id:any;
url: any;
routepath: Observable<string>;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(i => this.id = i['id']);
    console.log(this.id)
    this.activatedRoute.url.subscribe(
      u => u.forEach(value => this.url += `/${value}`)
    );
    console.log(this.url)
  }
  change(id){
    window.history.replaceState({}, '',`/second/${id}`);
  }

}
