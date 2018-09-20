import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mean';
  newTask: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = { title:"", description: ""}
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
  onSubmit() {
    this.newTask = {title: "", description: ""}
  }
}
