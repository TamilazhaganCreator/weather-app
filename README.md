# WeatherApp
It's shows the weather details of any city with the help of openweathermap.Hosted in https://weather-mapp.firebaseapp.com

## Description
It's a mini weather app with 9 panels. We can add the city by clicking the panel. After entering the city name, then press **ENTER** key to get the weather details and they will be shown to the user. Use the Edit button to change or delete the city in the panel. The weather details of each city will be auto updated for every 5 minutes. Even when offline, it shows the last weather details of the city.

## Tech Stack
- Angular 7
- Bootstrap css (loaded the bootstrap css locally, offline purposes)
- openweathermap - current weather data API

## Setup

`npm install` to install all the dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**Note:** when run locally, use your own api key at the line of 18 in home.service.ts file.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
