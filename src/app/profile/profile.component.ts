import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { ProfileService } from './../profile/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: any;
    movies: any;
    constructor(public auth: AuthService, public _ProfileService: ProfileService) {
        this.movies = this._ProfileService.movies;
    }

    ngOnInit() {
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        } else {
            this.auth.getProfile((err, profile) => {
                this.profile = profile;
            });
        }

    }
}