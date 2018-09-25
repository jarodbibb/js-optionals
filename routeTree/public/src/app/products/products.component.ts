import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.url.subscribe(params => this.title = `${params}`)
  }

}
