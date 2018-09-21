import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllCakesComponent } from './all-cakes/all-cakes.component';
import { OneComponent } from './one/one.component';


@NgModule({
  declarations: [
    AppComponent,
    AllCakesComponent,
    OneComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
