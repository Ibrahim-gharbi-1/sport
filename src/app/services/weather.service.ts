import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
pageUrl: string = "http://localhost:3000/weather"
  constructor(private httpClient: HttpClient) { }
  addCity(city: any) {
    return this.httpClient.post<{ city:any }>(this.pageUrl,city)
  }
}
