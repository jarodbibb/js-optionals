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
  updateProduct(product){
    console.log('id in update product', product.id)
    return this._http.put('/product/' + product.id, product.product)
  }
  delete(id){
    console.log('delete service', id)
    return this._http.delete('/product/' + id)
  }
}
