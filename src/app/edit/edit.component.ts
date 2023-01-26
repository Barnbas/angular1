import { Component } from '@angular/core';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  post: FormGroup

  constructor(private user :UserService, private fb:FormBuilder,)
  {
    this.post=this.fb.group({
 
      sid:[''],
      sname:[''],
      department:[''],
      phonenumber:['']
  
    })
    
    // var detail=JSON.parse(localStorage.getItem('details')|| "") 

    this.user.babi.subscribe(x=>{
      this.post.controls['sid'].patchValue(x.sid)
      this.post.controls['sname'].patchValue(x.sname)
  
      this.post.controls['department'].patchValue(x.department)
  
      this.post.controls['phonenumber'].patchValue(x.phonenumber)
    })


  

   
  }
  

  submit()
    {
      let data={
        "sid":this.post.controls['sid'].value,
        "sname":this.post.controls['sname'].value,
        "department":this.post.controls['department'].value,
        "phonenumber":this.post.controls['phonenumber'].value
        }
        console.log(data,"Update data")

        this.user.putData(data).subscribe((x)=>x)
      // console.log(data,"putdata");
      
        // this.user.putData(JSON.stringify(data.value)).subscribe((res:any)=>
        //   {
        //   console.log(res)
        //   })
      }
}
