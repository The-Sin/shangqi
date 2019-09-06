import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public id:string;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
  }

}
