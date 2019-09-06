import { Component, OnInit } from '@angular/core';
import { TrackPlan } from 'src/app/models/trackPlan';
import { VehicleModel } from 'src/app/models/vehicleModel';
import * as PIXI from 'pixi.js';
import { Graphics } from 'pixi.js';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/_auth/services/api.service';


@Component({
  //selector: 'app-vehicle-track-edit',
  templateUrl: './vehicle-track-edit.component.html',
  styleUrls: ['./vehicle-track-edit.component.css']
})
export class VehicleTrackEditComponent implements OnInit {
  //public sideTracks: TrackPlan[];
  public tracks: TrackPlan[];
  public vehicles :VehicleModel[];  
  //public selected: TrackPlan;
  public app: PIXI.Application;
  //public isEditing: boolean = false;
  public carId:string;
  public car: VehicleModel;
  public startpoint:string;
  public endpoint:string;
  public graphics: Graphics;

  private readonly newProperty = this;

  constructor(private route: ActivatedRoute, private apiService:APIService) { }

  // addSideTrack()
  // {
  //   this.isEditing = true;
  // }
  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get("carId")
    this.apiService.getVehicle(this.carId).subscribe(x=>{
      this.car = x;
    });

    this.apiService.getLastTrackByCar(this.carId).subscribe(x=>{
      this.startpoint = x.end.x + ':' + x.end.y;
    });
    this.apiService.getTracks().subscribe(list =>{
      this.tracks = list;
    });
  //   this.tracks = [ 
  //     {id: '1',carId:"1", coordinatesUpdated:[],start: {id: "1" , x:12,y:12},end: {id:"21", x:22,y:33},created:new Date(),predecessorId:null},
  //     {id: '2',carId:"2", coordinatesUpdated:[],start: {id: "2" , x:22,y:33},end: {id:"22", x:33,y:55},created:new Date(),predecessorId:null},
  //     {id: '3',carId:"3", coordinatesUpdated:[],start: {id: "3" , x:33,y:55},end: {id:"23", x:55,y:88},created:new Date(),predecessorId:null},
  //     {id: '4',carId:"4", coordinatesUpdated:[],start: {id: "4" , x:55,y:88},end: {id:"24", x:88,y:99},created:new Date(),predecessorId:null},
  //     {id: '5',carId:"5", coordinatesUpdated:[],start: {id: "5" , x:88,y:99},end: {id:"25", x:333,y:444},created:new Date(),predecessorId:null},
  //     {id: '6',carId:"6", coordinatesUpdated:[],start: {id: "6" , x:333,y:444},end: {id:"26", x:444,y:221},created:new Date(),predecessorId:null},   
  // ];
  //   this.sideTracks = [ 
  //     {id: '11',carId:"2", coordinatesUpdated:[],start: {id: "1" , x:55,y:88},end: {id:"21", x:100,y:33},created:new Date(),predecessorId:null},
  //     {id: '12',carId:"3", coordinatesUpdated:[],start: {id: "2" , x:333,y:444},end: {id:"22", x:200,y:200},created:new Date(),predecessorId:null},
  //     {id: '13',carId:"4", coordinatesUpdated:[],start: {id: "3" , x:33,y:55},end: {id:"23", x:109,y:107},created:new Date(),predecessorId:null}
      
  // ];


    this.app = new PIXI.Application();


    document.getElementById("map").appendChild(this.app.view);
    let self = this;
    this.app.view.onclick = function(event){
      console.log(event)
      if(self.startpoint)
      {
        self.endpoint = event.layerX + ':'+ event.layerY ;
        self.drawNewLine();
      }
      else{
        self.startpoint = event.layerX +':' + event.layerY ;
      }
    };
    this.drawLines();
    // this.drawSideLines();
  }




  private drawLines() {
    var red =0xff0000 ; //RED
    var yellow = 0xffd700; //YELLOW
    var white =0xFFFFFF ; //WHITE
    this.tracks.forEach(element => {
      let line2 = new Graphics();

      if(element.carId == this.carId)
      {
        line2.lineStyle(4, white, 1);
      }
      else{
        line2.lineStyle(4, red, 1);
      }
      
      
      line2.moveTo(element.start.x, element.start.y);
      line2.lineTo(element.end.x, element.end.y);
      this.app.stage.addChild(line2);
    });
  }

  private drawNewLine()
  {
    this.app.stage.removeChild(this.graphics);

    var temp1 = this.startpoint.split(':');
    var temp2 = this.endpoint.split(':');
    var color =0xffd700; //YELLOW ;
    this.graphics = new Graphics();
    this.graphics.lineStyle(4, color, 1);
    this.graphics.moveTo(+temp1[0], +temp1[1]);
    this.graphics.lineTo(+temp2[0], +temp2[1]);
    this.app.stage.addChild(this.graphics);
  }
}
