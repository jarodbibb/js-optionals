import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  newCake: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newCake = {baker: "", image: ""}
   
    }
   
    getOneCakeFromService(){
      let observable  = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log('this got cake', data)
    })    }
    submitCake(){
    let observable = this._httpService.createCake(this.newCake);
     observable.subscribe(data => {
       console.log("Baking a beautifull cake")
     })
    }
}
