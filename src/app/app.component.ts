import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/common.service';
import { WeatherDataValue } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
  city = '';
  weatherData: any;
  WeatherDataValue?: WeatherDataValue;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeather() {
    // console.log(city);
    this.commonService.getWeatherData(this.city).subscribe((data) => {
      this.weatherData = data;
    });
  }

  getWeatherData() {
    this.commonService.getWeatherDataFromRapid('Wellignton').subscribe({
      next: (response) => {
        this.WeatherDataValue = response;

        // console.log(response.data[0].lat)
        // console.log(response.data[0].lon)


        console.log(response);
      },
    });
  }
}
