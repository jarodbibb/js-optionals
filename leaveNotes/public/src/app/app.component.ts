import { Component } from '@angular/core';
import {HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  newNote: any;
  test: boolean;
addNote = [];
messages:[any]
constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.newNote = { message: ""}
    this.getNotes();
  }
  getNotes(){
    console.log("getting notes")
    let observable = this._httpService.getAll();
    observable.subscribe(data =>{
      console.log('data ', data.data)
      this.messages = data.data
    } )
  
  }
  new(){
    console.log('here')
    let observable = this._httpService.createNote(this.newNote);
    observable.subscribe(data=> {
      if(data['message'] === "Error"){
        console.log('we errorin out')
      }else{
        this.test = true;
        console.log('testing data in new ', data['data'])
        this.addNote.unshift(data['data'])
        console.log('right after', this.addNote)
        
      }
    })
  }

}
