import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TvmazeService } from './tvmaze.service';
import { HttpTestComponent } from './http-test/http-test.component';
import { TvmazeComponent } from './tvmaze/tvmaze.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HttpTestComponent,
    TvmazeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [BrowserAnimationsModule],
    [MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule]
  ],
  providers: [TvmazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
