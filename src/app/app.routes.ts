import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { TvmazeComponent } from './tvmaze/tvmaze.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'callback', component: CallbackComponent },
    { path: 'search', component: TvmazeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }
];