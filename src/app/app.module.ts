import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TvmazeService } from './services/tvmaze.service';
import { HttpTestComponent } from './http-test/http-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TvmazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
