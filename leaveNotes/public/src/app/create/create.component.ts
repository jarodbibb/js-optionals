import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
newNote: any;
addNote: [any];


  constructor(private _httpService: HttpService, private router: Router) { }


  ngOnInit() {
    this.newNote = { message: ""}
  }
  new(){
    console.log('here')
    let observable = this._httpService.createNote(this.newNote);
    observable.subscribe(data=> {
      if(data['message'] === "Error"){
        console.log('we errorin out')
      }else{
        console.log('testing data in new ', data['data'])
        this.addNote= data['data']
        this.router.navigate(['display', this.addNote])
       
        
      }
    })
  }

}
