import { Component } from '@angular/core';
import { Legend } from 'chart.js/dist';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  data: any;
    
  options: any;
  
  // constructor() {
  //     this.data = {
  //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //         datasets: [
  //             {
  //                 label: 'First Dataset',
  //                 data: [65, 59, 80, 81, 56, 55, 40]
  //             },
  //             {
  //                 label: 'Second Dataset',
  //                 data: [28, 48, 40, 19, 86, 27, 90]
  //             }
  //         ]
  //     }
      
  //     this.options = {
  //         plugins: {
  //             title: {
  //                 display: true,
  //                 text: 'My Title',
  //                 fontSize: 16
  //             },
  //             legend: {
  //                 position: 'bottom'
  //             }
  //         }
  //     };
  // }
  basicData: any;

    basicOptions: any;

    multiAxisData: any;

    chartOptions: any;

    multiAxisOptions: any;

    stackedData: any;

    stackedOptions:  any;

    horizontalOptions: any;


   

    ngOnInit() {
        this.basicData = {
            labels: ['January', 'February', 'March'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'orange',
                    data: [65, 100, 80,]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'skyblue ',
                    data: [28, 48, 40,]
                }
            ]
        };
        this.basicOptions={
          indexAxis:'',
        //   plugins: {
        //     legend: false
        // }
    };
        }     
}
