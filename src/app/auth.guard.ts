import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
// import { Observable } from 'rxjs';
import { ServiceService } from './service.service';
// import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : ServiceService, private router: Router ){}
  canActivate(){
    if(this.auth.isUserLoggedIn()){
      window.alert("Welcome");
    return true;
  }
  this.router.navigate(['ract'])
      window.alert("Please login");
  return false;

  // else{
  //   window.alert("You are not Valid User");
  //   return false
  // }
}
}
