import { Component } from '@angular/core';
import { HttpService} from './http.service';
import {Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(private _router: Router, private _httpService: HttpService){}
  ngOnInit(){
    this._router.navigate(['battle'])
  }
}
