import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { LoginserviceService } from "../app/api/loginservice.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private loginService : LoginserviceService, private router :Router){}
  canActivate(): boolean {
    if(this.loginService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }
}
