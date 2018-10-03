import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params, Data} from "@angular/router"
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
// @Input('player')
export class TeamComponent implements OnInit {
 try = true;
//  noIdea: any;
 adding: boolean;
 newPlayer: any;
 players: [any]
  constructor(private _httpService: HttpService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.noIdea = this.route.snapshot.data['type']
    // console.log('getting data', this.noIdea)
    this.newPlayer = {name: "", position: ""}
    this.getPlayers();
  
  }
  roster(){
    this.try = !this.try;
    this.adding = false;
  }
  add(){
    this.try = false;
    this.adding= true;

  }
  newP(value:any):void{
    let observable = this._httpService.createPlayer(this.newPlayer);
    observable.subscribe(data => {
      console.log('data from create', data['data'])

    })
  }
  getPlayers(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.players = data['data'];
      console.log('data from get all ', this.players[0].name)
    })
  }

}
