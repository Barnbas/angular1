import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: FormGroup

  constructor(private fb:FormBuilder,private router:Router,private user :UserService )
  {
    this.post=this.fb.group({
      sid:[''],
      sname:[''],
      department:[''],
      phonenumber:['']
      
    })
  }
    submit()
    {
    console.warn(this.post.value)
    let data={
    "sid":this.post.controls['sid'].value,
    "sname":this.post.controls['sname'].value,
    "department":this.post.controls['department'].value,
    "phonenumber":this.post.controls['phonenumber'].value
    }
    console.log(data)
    this.user.PostData(data).subscribe((res:any)=>
    {
    console.warn(res)
    })
    
    
  }

}

// data:any
//   constructor(private user :UserService){

//     getUserData(this.data)
// {
// //  console.log(this.data)
// this.user.PostData(this.data).subscribe((r)=>{
//   console.warn(r)
// })
// }
// }}

//   constructor(private http :HttpClient){}

//     getUserData(data:any)
// {
// //  console.log(this.data)
// this.http.post("http://172.17.10.41:8000/postdata",data).subscribe((r)=>{console.log(r)})
// console.log(data)
// }
// }




