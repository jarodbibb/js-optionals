import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: [any];
count: number = 0
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    let obs = this._httpService.getAll();
    obs.subscribe(data => {
      this.users = data['data']
    })
  }
}
