import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getWeather(cityName) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=YOUR_KEY&units=imperial`)
  }
}
