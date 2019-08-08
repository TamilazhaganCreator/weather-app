import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddcityComponent } from './addcity/addcity.component';
import { CityweatherdetailsComponent } from './cityweatherdetails/cityweatherdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddcityComponent,
    CityweatherdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
