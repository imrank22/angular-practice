import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import { SecondRoutingModule } from "../second/second-routing.module";
@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
