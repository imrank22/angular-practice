import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  title = 'materialApp';
  checked = false;
  indeterminate = false;
  labelPosition = 'before';
  disabled = false;

  // value= 0;
  vertical: boolean = false;
  thumbLabel:boolean = true;
  invert : boolean = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  mode= 'indeterminate';
  value= 50;

  
  constructor(private _formbuilder : FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formbuilder.group({
      firstCtrl : ['',Validators.required]
    });
    this.secondFormGroup = this._formbuilder.group({
      secondCtrl: ['',Validators.required]
    })
  }
states=[
  {
    name:'Jammu'
  },
  {
    name: 'Kashmir'
  },
  {
    name: 'Uttar Pradesh'
  },
  {
    name: 'Madhya Pradesh'
  }
]

emailControl = new FormControl('',[
  Validators.email,
  Validators.required
])

}
