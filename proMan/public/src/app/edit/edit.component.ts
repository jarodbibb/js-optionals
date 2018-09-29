import { Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
productId: any;
product: any;
new: any;

@Output() aTaskEventEmitter = new EventEmitter();
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.new =  { title: "", img: "", price: ""}
    this.route.params.subscribe(params => {
      
      this.productId = params.id;
      this.currentProduct(this.productId)

    })
  }
  triggerEvent(){
    //  2b. Emit the Event
    console.log('triggered')
    this.aTaskEventEmitter.emit(7); //we can pass in any data type
}
  currentProduct(id){
    let observable = this._httpService.getOne({id: id});
    observable.subscribe(data => {
      console.log('data from get one ',data['data'][0].title)
      this.product = { title: data['data'][0].title, price: data['data'][0].price, img: data['data'][0].img}
      console.log('this . product', this.product)
    })
  }
  update($event){
    console.log('this product', this.new.price)
    
    let observable = this._httpService.updateProduct({product: this.new, id: this.productId});
    observable.subscribe(data => {
      console.log('data from update', data);
      // this.aTaskEventEmitter.emit(data)
      // this.router.navigate(['products'])
      // console.log('after a taks has been admitted')
      this.triggerEvent();
    })
  }
 

}
