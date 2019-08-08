export class CityModel {
  cityFound: boolean = false;
  weatherDetails: WeatherModel = new WeatherModel();
  inputCity = '';
  showTextBox = false;
  showErrorMsg = false;
}

export class WeatherModel {
  cityName: string;
  tempCelsius: number;
  tempFahrenheit: number;
  humidity: number;
  wind:number;
  description: string;
  main: string;
  icon: string;
}
