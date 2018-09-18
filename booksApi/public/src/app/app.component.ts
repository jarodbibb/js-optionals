import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getAuthorsFromService()
  }
  tasks = []
  getAuthorsFromService(){
    // this._httpService.getTasks();
    
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {console.log("got our tasks!", data)
    this.tasks = data['tasks']
  })
    
  }
}
