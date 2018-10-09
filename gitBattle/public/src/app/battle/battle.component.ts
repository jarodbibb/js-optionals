import { Component, OnInit } from '@angular/core';
import {HttpService } from '../http.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
swtich: boolean = false;
switch2: boolean = false;
button1: boolean = true;
button2: boolean = true;
guser1: string
guser2: any;


  constructor(private _httpService: HttpService, private _router: Router) { }
  
  ngOnInit() {
    this.guser2 = {name: ""}
  }
  ready2(){
    console.log('user2 ', this.guser2)
  }

}
