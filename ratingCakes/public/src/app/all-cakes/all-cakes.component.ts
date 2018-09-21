import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-all-cakes',
  templateUrl: './all-cakes.component.html',
  styleUrls: ['./all-cakes.component.css']
})
export class AllCakesComponent implements OnInit {
cakes: [any];
  newRatings: any;
  
  @Input() cakesToShow: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getCakesFromService();
    this.newRatings = {stars: "", comment: ""}
  }

  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(info => {
      console.log('information', info)
      console.log("Got our cakes!", info.data[0].baker)
        this.cakes = info.data;
   })
  }
  rateCake(id){
    let observable = this._httpService.rateCake(this.newRatings, id);
    observable.subscribe(data => {
      console.log('added a rating ', data)
    })
  }

}
