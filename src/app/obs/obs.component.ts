import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent {
  demo:any;

constructor(private user:UserService){

  this.user.obs().subscribe(item=>{
    this.demo=item
  })
this.user.sub.subscribe(x=>console.log("The name in the component is:" +x))
this.user.sub.next("Babi")

}
}
