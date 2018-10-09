import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { UsersComponent } from './users/users.component';
import { HttpService} from './http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from "@angular/common"
@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   


  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
