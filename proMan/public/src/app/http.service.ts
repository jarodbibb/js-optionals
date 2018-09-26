import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll(){
    return this._http.get('/product');
  }
  createProduct(product){
    return this._http.post('/product', product);
  }
  getOne(id){
    return this._http.get('/product/' + id.id);
  }
  updateProduct(product, id){
    return this._http.put()
  }
}
