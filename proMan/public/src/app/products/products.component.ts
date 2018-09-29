import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  display: boolean;
  

  constructor(private _httpService: HttpService, private router: Router) { }
 
  ngOnInit() {
    this.display = true;
    this.getAll()
  }
  getAll(){
   
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log("data from get all ", data)
      this.products= data['data'];
    })
  }
  delete(id){
    let observable = this._httpService.delete(id);
    observable.subscribe(data => {
      console.log('data from delete')
    })
  }
  dataFromChild(eventData){
    console.log(eventData);
  }

}
