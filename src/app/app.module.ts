import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TvmazeService } from './tvmaze.service';
import { TvmazeComponent } from './tvmaze/tvmaze.component';
import { AuthService } from './auth/auth.service';
import { ProfileService } from './profile/profile.service';
import { CallbackComponent } from './callback/callback.component';

// import des styles Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule, MdCheckboxModule} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TvmazeComponent,
    CallbackComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [BrowserAnimationsModule],
    [MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule, MdCheckboxModule],
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [TvmazeService,AuthService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
