import { HomeService } from './../home/home.service';
import { CityModel, WeatherModel } from './../home/model';
import { Component, OnInit, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent {

  @Input() city: CityModel;
  @Input() index: number;

  constructor(private service: HomeService) { }

  addCity() {
    this.service.setCityDetails("add", this.index, this.city)
  }

  updateCityDetails() {
    this.service.setCityDetails("update", this.index, this.city)
  }

  removeCity() {
    this.service.setCityDetails("delete", this.index, this.city)
  }

  setShowTextBox() {
    this.service.setCityDetails("close", this.index, this.city)
  }

}
