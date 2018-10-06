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
    var number = game;
    console.log('here in the service', id, {game: game, status: status})
    return this._http.put('/player/' + id, {game: game, status: status})
  }
  deletePlayer(id){
    console.log('service delete id ', id)
    return this._http.delete('/delete/' + id)
  }
}
