import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { ICurrentWeather } from '../Icurrent-weather';

interface ICurrentWeatherData {

weather:[{

  icon:string
  description:string,

}],

main:{
temp:number

},

sys:{

  country:string

}

dt:number,
name: string

}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  
  
  //
  // getCurrentWeather(city:string, country:string){
 
    
    
    
    
    // }
    
    
    getCurrentWeather (city:string, country:string):Observable<ICurrentWeather>{
      
      const uriParams =  new HttpParams().set('q',`${city},${country}`).set('appid',environment.appId);
      
       return this.httpClient.get<ICurrentWeatherData>(`${environment.baseUrl}weather?`,{params:uriParams}).pipe(map((data) => this.transformTo(data)))
      
 }

 private transformTo(data:ICurrentWeatherData):ICurrentWeather{

  console.log(data.weather[0].description)
  console.log(data.name)

  return {
    city:data.name,
    country: data.sys.country,
    date: data.dt*1000,
    image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    temp:this.convertKelvinToFahrenheit(data.main.temp),
    desc:data.weather[0].description

  }

  
}
private convertKelvinToFahrenheit(kelvin:number ):number {
  
  return kelvin * 9 /5 -459.67

}


}