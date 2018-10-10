import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import {UsersComponent } from './users/users.component'
const routes: Routes = [
  {path: 'battle', component: BattleComponent},
  {path: 'users', component: UsersComponent },
  {path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
