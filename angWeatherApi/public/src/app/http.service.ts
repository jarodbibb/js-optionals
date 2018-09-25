import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getCityW(city){
    console.log(city.city)
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.city}&APPID=2c146c1b4f5a845798703cbb571ff8b8`);
  }
 }

