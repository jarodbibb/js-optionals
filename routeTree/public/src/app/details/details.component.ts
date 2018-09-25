import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],

})
export class DetailsComponent implements OnInit {
  title: string;
@Input() detailToShow: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.url.subscribe(params => console.log(`these ar the params find a string ${params}`))
  }

}
