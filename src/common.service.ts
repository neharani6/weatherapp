import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDataValue } from './app/models/weather.model';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: any): Observable<any> {
    var headers = {
      'X-RapidAPI-Key': 'b82388e8b3msh8c8dfdc584e4462p132503jsn350a68d76941',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
    };
    return this.http.get(
      'https://open-weather13.p.rapidapi.com/city/' + city + '/EN',
      { params: {}, headers: headers }
    );
  }

  getWeatherDataFromRapid(cityName: any): Observable<any> {
    var headers = {
      'X-RapidAPI-Key': '0b2f47b750mshff1bad09879b3c8p141068jsn985953d1da33',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    };

    var url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current';
    var params = {
      lon: '38.5',
      lat: '-78.5',
    };
    return this.http.get<WeatherDataValue>(url, {
      params: { lon: params.lon, lat: params.lat },
      headers: headers,
    });
  }
}
