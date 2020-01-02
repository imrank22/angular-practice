import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './splitwise/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { Demo1Component } from './material/demo1/demo1.component';

const appRoutes : Routes = [
    {
        path : '',
        component : LoginComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    }
    ,{
        path : 'dashboard',
        component : DashboardComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'cart',
        component : CartComponent
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'first',
        loadChildren: './first/first.module#FirstModule'
    },
    {
        path: 'second/:id',
        loadChildren: './second/second.module#SecondModule'
    },
    {
        path: 'mat-demo1',
        component: Demo1Component
    }

]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}