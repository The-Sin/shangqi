import { Component, OnInit } from '@angular/core';
import * as html2canvas from 'html2canvas';
declare let BMap: any; //declare moment

@Component({
  selector: 'app-baidu-map',
  templateUrl: './baidu-map.component.html',
  styleUrls: ['./baidu-map.component.css']
})
export class BaiduMapComponent implements OnInit {

      
  public jingdu: number = 116.404;
  public weidu: number = 39.915;
  public city: string = "北京";
  public sw:any;
  public ne:any;
  public scString:string;
  constructor() { }

  buildMap() {
    // 百度地图API功能
    var self = this;
    this.scString = null;
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

  capture() {
    ///.////
    html2canvas(document.querySelector("#allmap"),{useCORS: true ,allowTaint: false}).then(canvas => {
//      document.body.appendChild(canvas)
      this.scString = canvas.toDataURL("image/png");
    });
  }



  ngOnInit() {
  }
}
