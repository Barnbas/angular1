import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{

  updated:boolean=false;
  added:boolean=false;
  ff:boolean=false;
  
  details:any;
  public errmsg:any;
result:any;
  title: string | undefined;
  home: any;
  activeindex: any;
  newdata: any;
  newTaskForm: any;
  newTaskForm1: any;

// 


 constructor(public user :UserService,public fb: FormBuilder )
  {
    this.newTaskForm = fb.group({
      sid:[' '],
      sname:[' '],
      department:[' '],
      phonenumber:[' ']
     })
     this.newTaskForm1 = fb.group({
      sid:[' '],
      sname:[' '],
      department:[' '],
      phonenumber:[' ']
     })
  }
 post !: FormGroup
 cols: any=[];
 sid:any;
  sname:any;
  department:any;
  phonenumber:any;
  getD: any=[];
id:any;

  ngOnInit(): void {
    this.mapp();
     }



mapp(){
//   this.user.getData().subscribe((res:any)=>
//   {
// this.getD=res
//     console.log(this.getD)
//   }
//   )
this.user.getData().subscribe(data=>
  this.getD=data)
}


 add(){
  this.added=true;
  // this.updated = false;


}
addI()
{
  this.added=false
  let newdata={
    "sid":this.newTaskForm1.controls['sid'].value,
    "sname":this.newTaskForm1.controls['sname'].value,
    "department":this.newTaskForm1.controls['department'].value,
    "phonenumber":this.newTaskForm1.controls['phonenumber'].value
    }
 //  console.log(newdata)
  this.user.PostData(newdata).subscribe((res)=>
  {
   this.mapp();
  })
}

//  edit(a: any){

  // this.added=false;
  // this.updated = true;
  //  this.sid.patchValue=a.sid
  //   this.sname.patchValue=a.sname
  // this.department.patchValue=a.department
  // this.phonenumber.patchValue =a.phonenumber
  // this.id=a.sid
  

  edit(data2:any)
  {
   this.updated=true
   
   this.mapp();
   this.newTaskForm.controls['sid'].setValue(data2.sid)
   this.newTaskForm.controls['sname'].setValue(data2.sname)
   this.newTaskForm.controls['department'].setValue(data2.department)
   this.newTaskForm.controls['phonenumber'].setValue(data2.phonenumber)

  }
 
  update(){
    // this.added=false;
  this.updated = false;
let data={
  "sid":this.newTaskForm.controls['sid'].value,
  "sname":this.newTaskForm.controls['sname'].value,
  "department":this.newTaskForm.controls['department'].value,
  "phonenumber":this.newTaskForm.controls['phonenumber'].value
  }
  console.log(data,"Update data")

  this.user.putData(data).subscribe((x)=>{    
     this.mapp();
      }    )
   
  }




Del(data:any){
  this.user.DeleteData(data).subscribe((res:any)=>
    {
 this.mapp();
    })
}

}





