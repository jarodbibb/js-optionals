import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll(){
    return this._http.get('/team')
  }
  createPlayer(player){
    return this._http.post('/player', player)
  }
  updatePlayer(id,  player){
    return this._http.put('/player/' + id, player)
  }
  delete( id){
    return this._http.delete('/player/' + id)
  }
}
