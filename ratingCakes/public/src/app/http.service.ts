import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getCakes();
  }
  getCakes() {
    return this._http.get('/cake')
  }
  createCake(newCake){
    return this._http.post('/cake', newCake)
  }
  rateCake(newRating, id){
    return this._http.post('/cake/'+id, newRating)
  }
}

