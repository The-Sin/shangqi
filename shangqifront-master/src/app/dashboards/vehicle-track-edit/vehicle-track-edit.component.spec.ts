import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrackEditComponent } from './vehicle-track-edit.component';

describe('VehicleTrackEditComponent', () => {
  let component: VehicleTrackEditComponent;
  let fixture: ComponentFixture<VehicleTrackEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTrackEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
