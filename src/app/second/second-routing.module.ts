import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SecondComponent } from "./second/second.component";
const appRoutes : Routes =[
    {
        path: '',
        component: SecondComponent
    }
];

@NgModule({
    imports : [RouterModule.forChild(appRoutes)],
    exports : [RouterModule]
})
export class SecondRoutingModule{}