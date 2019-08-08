import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { HomeService } from './home.service';
import { CityModel, WeatherModel } from './model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityArray: CityModel[] = [];
  showTextBox: boolean[] = [];
  loader = false;
  cityUpdateSubscription: Subscription;
  autoUpdateSubscription: Subscription = null;

  constructor(private service: HomeService) {
    this.cityUpdateSubscription = this.service.getCityDetails().subscribe((res) => {
      if (res[0] == "add") {
        this.addCity(res[1], true)
        if (!this.autoUpdateSubscription) {
          this.autoUpdate()
        }
      } else if (res[0] == 'edit') {
        this.editCity(res[1])
      } else if (res[0] == 'update') {
        this.updateCityDetails(res[1])
      } else if (res[0] == "delete") {
        this.removeCity(res[1])
      } else if (res[0] == "close") {
        this.setShowTextBox(res[1], false)
      }
    })
  }

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.cityArray.push(new CityModel());
      let storedValue = localStorage.getItem("city[" + i + "]")
      if (storedValue) {
        this.cityArray[i] = JSON.parse(storedValue)
        if (!this.autoUpdateSubscription && navigator.onLine)
          this.autoUpdate()
      }
    }
  }

  setShowTextBox(index: number, value: boolean) {
    this.cityArray[index].inputCity = ""
    this.cityArray[index].showErrorMsg = false
    this.cityArray[index].showTextBox = value
  }

  addCity(index: number, value: boolean) {
    this.loader = value;
    this.service.getWeather(this.cityArray[index].inputCity).subscribe((res: any) => {
      this.setWeatherObject(res, index);
      this.loader = false;
    }, error => {
      this.loader = false;
      if (error.error.cod === '404') {
        this.cityArray[index].showErrorMsg = true;
      }
    });
  }

  editCity(index) {
    this.setShowTextBox(index, true)
    this.cityArray[index].inputCity = this.cityArray[index].weatherDetails.cityName
  }

  updateCityDetails(index: number) {
    let element = this.cityArray[index]
    element.weatherDetails.cityName === element.inputCity ? this.cityArray[index].showTextBox = false : this.addCity(index, true)
  }

  removeCity(index) {
    this.cityArray[index] = new CityModel();
    this.cityArray[index].showTextBox = false
    let foundlist = this.cityArray.map((c) => (c.cityFound == true))
    if (this.autoUpdateSubscription && foundlist.length == 0) {
      this.autoUpdateSubscription.unsubscribe()
      this.autoUpdateSubscription = null
    }
    localStorage.removeItem("city[" + index + "]")
  }

  autoUpdate() {
    this.autoUpdateSubscription = interval(300000)
      .subscribe((val) => {
        for (let index = 0; index < this.cityArray.length; index++) {
          if (this.cityArray[index].cityFound)
            this.addCity(index, false)
        }
      });
  }

  setWeatherObject(response, index: number) {
    let weatherObject = new WeatherModel();
    weatherObject.cityName = response.name;
    ['description', 'main', 'icon'].forEach((field => {
      weatherObject[field] = response.weather[0][field]
    }))
    weatherObject.tempFahrenheit = response.main.temp;
    weatherObject.tempCelsius = Math.round((response.main.temp - 32) / 1.8);
    weatherObject.humidity = response.main.humidity;
    weatherObject.wind = Math.round(response.wind.speed * 1.609344);
    this.cityArray[index].weatherDetails = weatherObject
    this.cityArray[index].cityFound = true
    this.cityArray[index].showTextBox = false
    this.cityArray[index].inputCity = response.name
    localStorage.setItem("city[" + index + "]", JSON.stringify(this.cityArray[index]))
  }

  ngOnDestroy() {
    if (this.cityUpdateSubscription)
      this.cityUpdateSubscription.unsubscribe()
    if (this.autoUpdateSubscription)
      this.autoUpdateSubscription.unsubscribe()
  }

}
