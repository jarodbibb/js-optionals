import { Component } from '@angular/core';
import {HttpService } from './http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  newNote: any;
  test: boolean;
  timeString:any;
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
      // console.log('data ', guess.toDateString())
      for( let i = 0; i < data['data'].length; i++){
        // var guess = new Date(data['data'][i].createdAt);
        // data['data'][i]['formated'] = guess.toDateString()
        // var convertedDate = data['data'][i].createdAt.toLocaleString()
        // console.log('doubtfull', convertedDate)
        // var options = {
        //   hour: 'numeric',
        //   minute: 'numeric',
        //   hour12: true
        // };
        // this.timeString = guess.toLocaleString('guess', options)
      //   console.log('time', this.timeString)
      // }
      const datePipe = new DatePipe('en-US');
const myFormattedDate = datePipe.transform(data['data'][i].createdAt, 'medium')
      data['data'][i]['piped'] = myFormattedDate
      this.messages = data['data']
      console.log('data from get all ', myFormattedDate
      }
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
