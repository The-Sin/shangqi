import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/models/vehicleModel';

@Component({
  selector: 'app-dashboards-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {



  public dashboard1 :VehicleModel[];  

  constructor() { }

  // id:string;
  // isMain: boolean;
  // status:string;
  // battery:string;
  // network:string;
  ngOnInit() {
    this.dashboard1 = [ 
    {id: '1', isMain: false, status:'40%', battery:'40%', network:'40%'},
    {id: '2', isMain: false, status:'40%', battery:'40%', network:'40%'},
    {id: '3', isMain: false, status:'40%', battery:'40%', network:'40%'},
    {id: '4', isMain: false, status:'40%', battery:'40%', network:'40%'},
    {id: '5', isMain: false, status:'40%', battery:'40%', network:'40%'},
    {id: '6', isMain: true, status:'40%', battery:'40%', network:'40%'}
  ];


  }

}
