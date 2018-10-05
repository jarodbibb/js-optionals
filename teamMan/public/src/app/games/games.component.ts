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
gameNumber: any;


  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
   this.getAll();
   this.game("game3")
  }
  getAll(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.players = data['data']

    })
  }
  game(data){
    this.gameNumber = data;

  }
  playing(id, status){
    let observable = this._httpService.updatePlayer(id, this.gameNumber, status )
    observable.subscribe(data => {
      console.log('got data back', data)
    })
  }

}
