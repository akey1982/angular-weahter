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
today: number = Date.now();



  constructor(private weatherService: WeatherService) {

    this.current ={

      city:'',
      country:'',
      image: '',
      temp:0,
      desc:''

    }

   }

  ngOnInit(): void {
  

  this.weatherService.getCurrentWeather('Rabat','Morocco').subscribe((data) => this.current = data)
  
  }

}
