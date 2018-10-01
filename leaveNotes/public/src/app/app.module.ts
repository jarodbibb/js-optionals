import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CreateComponent } from './create/create.component';
import {HttpService} from './http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // PerfectScrollbarModule, 
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
