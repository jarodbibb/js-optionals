import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  title: number;
  constructor(private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    this._route.params.subscribe(params => 
    this.title = params.id
  // this.title = 17;
    )
  }

}
