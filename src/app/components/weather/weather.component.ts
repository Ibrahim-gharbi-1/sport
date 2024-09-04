import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }
  findWeather!: FormGroup
  result: any = {}
  ngOnInit() {
    this.findWeather = this.formBuilder.group({
      city: ['', [Validators.required]],
    })
  }
  searchWeather() {
    this.weatherService.addCity(this.findWeather.value).subscribe(
      (response) => {
        console.log("here is the response after adding a city", response.city)
        this.result = response.city
      }
    );
  }
}
