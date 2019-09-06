import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryvComponent } from './galleryv.component';

describe('GalleryvComponent', () => {
  let component: GalleryvComponent;
  let fixture: ComponentFixture<GalleryvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
