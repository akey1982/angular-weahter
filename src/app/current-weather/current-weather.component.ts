import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../Icurrent-weather';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {

    this.current ={

      city:'Nidderau',
      country:'Deutschland',
      date: 1000,
      image: './assets/nidderau-hessen.png',
      temp:72,
      desc:'dort lebe ich '

    }

   }

  ngOnInit(): void {
  
  this.weatherService.getCurrentWeather('Munich','Germany').subscribe((data) => this.current = data)
  
  }

}
