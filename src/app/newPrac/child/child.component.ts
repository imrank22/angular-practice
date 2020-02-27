import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Injectable({
  providedIn: ParentComponent
})
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
/*   @Input() selectedProduct: any;
  @Input() isSelected: boolean;

  @Output() addedproduct= new EventEmitter<any>();

  rolename= new BehaviorSubject("maker"); */
  @Input() total_user;
  username: any;
  @Output() name= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
/*     if(this.isSelected){
      this.addedproduct.emit(this.selectedProduct);
    } */
  }


  createUser(){
    this.total_user = this.total_user +1
    this.name.emit(this.username)
    this.username=''
  }

}
