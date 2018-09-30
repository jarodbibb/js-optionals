import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import {Pro} from '../pro';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
product: any;
errors: string;
pro = new Pro();
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.product = { title: "", img: "", price: ""}
  }
  validation(){
    this.product.push(this.pro)
    this.pro = new Pro;
    console.log('after observable and validation')
    this.newProduct()
  }
  newProduct(){
    console.log('in new product')
    
    let observable = this._httpService.createProduct(this.product);
    observable.subscribe(data => {
      if(data['message'] === "Error"){
        console.log("we errorin it out", data['data'])
        // this.errors = data

      }
      console.log('data from createing ', data)
      this.router.navigate(['products'])
    })
  }
  
}
