import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityweatherdetailsComponent } from './cityweatherdetails.component';

describe('CityweatherdetailsComponent', () => {
  let component: CityweatherdetailsComponent;
  let fixture: ComponentFixture<CityweatherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityweatherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityweatherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
