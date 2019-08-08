import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CityModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  cityUpdate = new Subject<[string, number, CityModel]>();
  addCity = new Subject<[number, boolean]>();
  loader = false

  constructor(private http: HttpClient) { }

  getWeather(cityName) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=YOUR_KEY&units=imperial`)
  }

  setCityDetails(type, index, value) {
    this.cityUpdate.next([type, index, value])
  }

  getCityDetails(): Observable<[string, number, CityModel]> {
    return this.cityUpdate
  }
}
