import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';
import { Graphics } from 'pixi.js';
import { TrackPlan } from 'src/app/models/trackPlan';
import { VehicleModel } from 'src/app/models/vehicleModel';
import * as html2canvas from 'html2canvas';
import { APIService } from 'src/app/_auth/services/api.service';
declare let BMap: any;
@Component({
  selector:'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  public tracks: TrackPlan[];
  public sideTracks: TrackPlan[];
  public dashboard2: VehicleModel[];
  public selected: VehicleModel;
  public app: PIXI.Application;
  public jingdu: number = 116.404;
  public weidu: number = 39.915;
  public city: string = "北京";
  public sw:any;
  public ne:any;

  constructor(private apiService: APIService) { }
  
  buildMap() {
    // 百度地图API功能
    var self = this;
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(this.jingdu, this.weidu), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
    }));
    map.addControl(new BMap.NavigationControl());

    map.setCurrentCity(this.city);          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(false);     //鼠标滚轮缩放

    map.addEventListener("mouseout", function(){    
      //alert("您mouseout了地图。");    
      var cp = map.getBounds();
    var pt = cp.getCenter();
    self.sw = cp.getSouthWest();
    self.ne = cp.getNorthEast();
    console.log(self.sw);
    console.log(self.ne);
    });
    
  }
  select(event, item) {
    this.selected = item;
    console.log(item);
    this.app.stage.removeChildren();
    this.drawLines();
    
  }
  capture() {
    ///.////
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas)
      var img = canvas.toDataURL("image/png");
    });
  }

  private drawLines() {
    // create a new background sprite
    const background = PIXI.Sprite.from('/assets/bg.jpg');
    background.width = this.app.screen.width;
    background.height = this.app.screen.height;
    this.app.stage.addChild(background);

    this.tracks.forEach(element => {

      var currentCar = this.dashboard2.find(x=>{return x.id == element.carId});

      if (this.selected && this.selected.id == element.carId) {
        var color = 0xffd700; //YELLOW
      }
      else {
        if(currentCar.isMain)
        {
          var color = 0xFFFFFF;
        }
        else
        {
          var color = 0xff0000;
        }
         
      }
      let line2 = new Graphics();
      line2.lineStyle(4, color, 1);
      line2.moveTo(element.start.x, element.start.y);
      line2.lineTo(element.end.x, element.end.y);
      this.app.stage.addChild(line2);
    });
  }


    ngOnInit() {
  

      this.apiService.getTracks().subscribe(list =>{
        this.tracks = list;
      });
      this.apiService.getVehicles().subscribe(list =>
        {
          this.dashboard2 = list;
        })
      
      this.app = new PIXI.Application({ transparent: true });
      document.getElementById("demo").appendChild(this.app.view);
  
  
  
      this.drawLines();
      //this.drawSideLines();
  
    }

}
