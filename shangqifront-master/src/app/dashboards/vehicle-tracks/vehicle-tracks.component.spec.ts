import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTracksComponent } from './vehicle-tracks.component';

describe('VehicleTracksComponent', () => {
  let component: VehicleTracksComponent;
  let fixture: ComponentFixture<VehicleTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
