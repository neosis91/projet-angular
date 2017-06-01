import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';

export const ROUTES: Routes = [
    { path: 'callback', component: CallbackComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }
];