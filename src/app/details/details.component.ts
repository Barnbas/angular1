import { Component } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
public data=[{}];
constructor(private details:ServiceService){}

ngonInit()
{
  this.data=this.details.getdata();
}

}
