import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent} from './edit/edit.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
 { path: 'products', component: ProductsComponent, children: [
    {path: 'new', component: CreateComponent},
    {path: 'edit/:id', component: EditComponent},
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
