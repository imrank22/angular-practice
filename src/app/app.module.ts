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

@NgModule({
  declarations: [
    AppComponent, CartComponent, LoginComponent, DashboardComponent, HeaderComponent, Demo1Component,
  ],
  imports: [
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
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
