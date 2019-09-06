import { Component, OnInit } from '@angular/core';
import { TrackPlan } from 'src/app/models/trackPlan';
import * as PIXI from 'pixi.js';
import { Graphics } from 'pixi.js';
import { VehicleModel } from 'src/app/models/vehicleModel';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/_auth/services/api.service';

@Component({
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit {
  //public sideTracks: TrackPlan[];
  public dashboard3: TrackPlan[];
  
  public selected: TrackPlan;
  public app: PIXI.Application;
  
  public carId:string;
  public car: VehicleModel;
  public startpoint:string;
  public endpoint:string;

  private readonly newProperty = this;

  constructor(private route: ActivatedRoute, private apiService:APIService) {

   }

   ngOnInit() {

    this.apiService.getTracks().subscribe(list =>{
      this.dashboard3 = list;
    });
  
      this.carId = this.route.snapshot.paramMap.get("carId")
      this.apiService.getVehicle(this.carId).subscribe(x=>{
        this.car = x;
      });
  
      this.app = new PIXI.Application();
  
  
      document.getElementById("map").appendChild(this.app.view);
      //let self = this;
      // this.app.view.onclick = function(event){
      //   console.log(event)
      //   if(self.startpoint)
      //   {
      //     self.endpoint = event.layerX + ':'+ event.layerY ;
      //     self.drawNewLine();
      //   }
      //   else{
      //     self.startpoint = event.layerX +':' + event.layerY ;
      //   }
      // };
      this.drawLines();
  
    }
  
    clickme()
    {
  
    }
    select(event, item)
    {
      this.selected = item;
      console.log(item);
      this.app.stage.removeChildren();
      this.drawLines();
    }
  
  
  
    private drawLines() {
      var red =0xff0000 ; //RED
      var yellow = 0xffd700; //YELLOW
      var white =0xFFFFFF ; //WHITE
      this.dashboard3.forEach(element => {
        let line2 = new Graphics();
  
        if (this.selected && this.selected.id == element.id) {
          line2.lineStyle(4, yellow, 1);
        }
        else {
          if(element.carId == this.carId)
          {
            line2.lineStyle(4, white, 1);
          }
          else{
            line2.lineStyle(4, red, 1);
          }
          
        }
        
        
        line2.moveTo(element.start.x, element.start.y);
        line2.lineTo(element.end.x, element.end.y);
        this.app.stage.addChild(line2);
      });
    }
  
    // private drawNewLine()
    // {
    //   var temp1 = this.startpoint.split(':');
    //   var temp2 = this.endpoint.split(':');
    //   var color =0xff0000 ;
    //   let line2 = new Graphics();
    //   line2.lineStyle(4, color, 1);
    //   line2.moveTo(+temp1[0], +temp1[1]);
    //   line2.lineTo(+temp2[0], +temp2[1]);
    //   this.app.stage.addChild(line2);
    // }
}
