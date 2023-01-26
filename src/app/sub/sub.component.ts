import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {

  demo:any;

constructor(private user:UserService){

  this.user.obs().subscribe(item=>{
    this.demo=item
  })
this.user.sub.subscribe(x=>console.log("The name in the component is:" +x))
this.user.sub.next("Babi")
}
}

