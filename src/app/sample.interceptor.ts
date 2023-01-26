import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class SampleInterceptor implements HttpInterceptor {

  constructor(private user: UserService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      const idToken=localStorage.getItem("details")
      if(idToken)
      {
const cloned=req.clone({
  headers:req.headers.set("Authorization", `Bearer ${this.user.getToken()}`+idToken )
 })
 return next.handle(cloned)     }
      else{
return next.handle(req)
      }
  }
}
