import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getCakesFromService();
    }
    cakes = [];
    getCakesFromService(){
      let observable = this._httpService.getCakes();
      observable.subscribe(data => {
        console.log("Got our cakes!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        this.cakes = data['cakes'];
        console.log('this.cakes')
     })
    }
}
