import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
humidity : number;
AvTemp: number;
HighTemp: number;
img: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService

  ) { }

  ngOnInit() {
    // this._route.params.subscribe((params:Params)=> {
    //   console.log(params['id'])
    // })
    var city = 'milpitas';
    this.img = "https://images.pexels.com/photos/1236720/pexels-photo-1236720.jpeg?auto=compress&cs=tinysrgb&h=350";
    let observable = this._httpService.getCityW({city: city});
    observable.subscribe(data => {
      console.log("data from api", data)
      this.humidity = Math.floor(data.main.humidity);
      this.AvTemp = Math.floor(data.main.temp);
      this.HighTemp = data.main.temp_max;
    })
  }

}
