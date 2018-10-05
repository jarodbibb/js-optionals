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
  updatePlayer(id, game, status){
    console.log('here in the service', id, game, status)
    return this._http.put('/player/' + id, game, status)
  }
  deletePlayer(id){
    return this._http.delete('/delete/' + id)
  }
}
