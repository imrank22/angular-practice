import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "../app/auth.guard";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCheckboxModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './splitwise/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { Demo1Component } from './material/demo1/demo1.component';
import { MatProgressSpinnerModule,MatTabsModule,MatStepperModule,MatExpansionModule,MatToolbarModule,MatMenuModule, MatButtonModule,MatSliderModule,MatDatepickerModule,MatOptionModule, MatSelectModule, MatIconModule, MatNativeDateModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION} from  'ngx-ui-loader';
import { ParentComponent } from './newPrac/parent/parent.component';
import { ChildComponent } from './newPrac/child/child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgDatepickerModule } from 'ng2-datepicker';

import { CustomPipes } from "../app/appPipes/custompipes";
import { AnimationsComponent } from './animations/animations.component';

import { NgwWowModule } from 'ngx-wow';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.threeBounce, // background spinner type
  fgsType: SPINNER.threeBounce, // progress bar thickness
};


@NgModule({
  declarations: [
    AppComponent, CustomPipes , CartComponent, LoginComponent, DashboardComponent, HeaderComponent, Demo1Component, ParentComponent, ChildComponent, NavbarComponent, AnimationsComponent,
  ],
  imports: [
    NgwWowModule,
    NgDatepickerModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatStepperModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule, 
    MatButtonModule,
    MatSliderModule,
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule,
    BrowserModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFontAwesomeModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
