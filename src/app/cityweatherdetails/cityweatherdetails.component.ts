import { Component, Input } from '@angular/core';
import { HomeService } from './../home/home.service';
import { CityModel } from './../home/model';

@Component({
  selector: 'app-cityweatherdetails',
  templateUrl: './cityweatherdetails.component.html',
  styleUrls: ['./cityweatherdetails.component.css']
})
export class CityweatherdetailsComponent {

  @Input() city: CityModel;
  @Input() index: number

  constructor(private service: HomeService) { }

  editCity() {
    this.service.setCityDetails("edit", this.index, this.city)
  }

}
