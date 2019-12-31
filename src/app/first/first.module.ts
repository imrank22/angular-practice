import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { FirstRoutingModule } from "../first/first-routing.module";
@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
