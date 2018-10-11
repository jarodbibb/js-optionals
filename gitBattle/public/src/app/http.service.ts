import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
// import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
// import 'rxjs/add/operator/map'
import {map} from 'rxjs/operators'
// import 'rxjs/add/operator/toPromise';
import "rxjs";


// import { User } from '../../../server/models/user.js';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient) { }

getAll(){
  return this._http.get('/user')
}

// apiget(data){
//   return this._http.get('https://api.github.com/users/' + data.name).map( data = > data.json).toPromise()
  // .pipe(map((res:Response) => res.json()))
//   console.log('service data.name', data.name)
// return this._http.get('/apicall/' + data.name)
// }r
retrieveGithubUser(username) {
  if (username) {
    // return this._http.get(`https://api.github.com/users/${username}`)
    // .pipe.map( data => data.json() )
    // .toPromise();

    return this._http.get(`https://api.github.com/users/${username}`);
  } 
}
create(data){
  console.log('service', data)
  return this._http.post('/user', data[1])
}
}
