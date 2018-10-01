import { Component, OnInit } from '@angular/core';

import {HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  messages: [any];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNotes()
  }
getNotes(){
  console.log("getting notes")
  let observable = this._httpService.getAll();
  observable.subscribe(data =>{
    console.log('data ', data.data[2].message)
    this.messages = data.data
  } )

}
}
