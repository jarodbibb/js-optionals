import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent} from './products/products.component';
import {DetailsComponent} from './details/details.component';
 import {BrandComponent} from './brand/brand.component';
const routes: Routes = [{
  path: 'products', component: ProductsComponent, children: [
    {path : 'details', component: DetailsComponent},
    {path: 'brand/:id', component: BrandComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
