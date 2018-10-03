import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

}
