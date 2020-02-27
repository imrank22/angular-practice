import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers : [ChildComponent]
})
export class ParentComponent implements OnInit {
// selected: any = 'Please Select Your Product';
// added: boolean = false;
// addedproduct: any;
// finalproduct: any;

// role: any;
usernames: any=[];
totaluser: number = 0;

name: string= 'Imran Khan'
  constructor( private child : ChildComponent ) {
/*     this.child.rolename.subscribe(res=>{
      this.role = res
    }) */
  }

  ngOnInit() {

  }

  // onselect(product){
  //   this.added= true;
  //   this.selected = product;
  // }

  // onAddedProduct(data){
  //   this.addedproduct= data;
  // }

  // addtoCart(){
  //   this.finalproduct = this.addedproduct;
  // }

  getNames(data){
    this.usernames.push(data);
    console.log(this.usernames)
  }

  removeUser(index){
    this.usernames.splice(index,1);
    this.totaluser = this.usernames.length;
    console.log(this.totaluser);
  }

}
