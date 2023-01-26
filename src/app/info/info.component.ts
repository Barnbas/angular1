import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
//  title ='demo';
  details:any;
  public errmsg:any;
result:any;
  title: string | undefined;
  home: any;
  activeindex: any;
  
 constructor(private user :UserService ,private router:Router){
  this.user.getData().subscribe(data=>
    this.details=data,error => this.errmsg=error


 
  )
 }

 edit(a: any){
  console.log(a)
  // localStorage.setItem('details',JSON.stringify(a))
  this.user.babi.next(a)
  this.router.navigate(['edit'])


 }

Del(data:any){
  this.user.DeleteData(data).subscribe((res:any)=>
    {
    console.warn(res)
    })
}
}
