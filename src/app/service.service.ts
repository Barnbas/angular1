import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getdata(){
    return[
    "vinnu","sai"];
  }

  isUserLoggedIn(){
  return true;
}
}
