import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpService} from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule }  from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
