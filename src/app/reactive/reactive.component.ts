import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  // lang = 
  // { name:" ",password:" "}
// show()
// {
//   console.log(this)

// }

constructor(public router:Router){}
 events()   
 {
  this.router.navigate(['form'])
 }
}
