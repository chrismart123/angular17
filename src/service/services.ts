import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    const url = `https://weather.com/swagger-docs/ui/sun/v1/sunV1DailyForecast.json`;
    return this.http.get<any>(url);
  }

  getWeatherGeo(): Observable<any> {
    const url = `https://openweathermap.org/forecast16#geo16`;
    return this.http.get<any>(url);
  }

}
