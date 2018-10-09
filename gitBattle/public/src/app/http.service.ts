import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
}
// getAll(){
//   return this._http.get('/user')
// }


