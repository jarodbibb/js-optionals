import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
product: any;
errors: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.product = { title: "", img: "", price: ""}
  }
  newProduct(){
    let observable = this._httpService.createProduct(this.product);
    observable.subscribe(data => {
      console.log('data from createing ', data)
      this.router.navigate(['products'])
    })
  }
  
}
