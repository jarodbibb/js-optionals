import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
players: [any];
one: boolean;
two: boolean;
three: boolean;
gameNumber: number;


  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
   this.getAll();
  }
  getAll(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log('new data just got ', data['data'])
      this.players = data['data']

    })
  }
  game1(){

  }

}
