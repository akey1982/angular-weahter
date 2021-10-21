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

  
  
    
    getCurrentWeather (search:string|number, country?:string):Observable<ICurrentWeather>{

     let uriParams = new HttpParams();
      
      if(typeof search === "string"){

        uriParams.set('q', country ? `${search},${country}`: search)


      }else{


        uriParams.set('zip',search)
      }


      uriParams.set('appid',environment.appId)
      
       return this.httpClient.get<ICurrentWeatherData>(`${environment.baseUrl}weather?`,{params:uriParams}).pipe(map((data) => this.transformTo(data)))
      
 }

 private transformTo(data:ICurrentWeatherData):ICurrentWeather{


  return {
    city:data.name,
    country: data.sys.country,
    image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    temp:this.convertKelvinToFahrenheit(data.main.temp),
    desc:data.weather[0].description

  }

  
}
private convertKelvinToFahrenheit(kelvin:number ):number {
  
  return Math.round(kelvin -273.15)

}


}