import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BurbankComponent} from './burbank/burbank.component';
import {SanjoseComponent } from './sanjose/sanjose.component';
import {SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
  { path: 'burbank', component: BurbankComponent},
  { path: 'sanjose', component: SanjoseComponent},
  { path: 'seattle', component: SeattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
