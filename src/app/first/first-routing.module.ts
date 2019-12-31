import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
const appRoutes : Routes =[
    {
        path: '',
        component: FirstComponent
    }
];

@NgModule({
    imports : [RouterModule.forChild(appRoutes)],
    exports : [RouterModule]
})
export class FirstRoutingModule{}