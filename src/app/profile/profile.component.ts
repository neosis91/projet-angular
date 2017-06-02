import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: any;
    @Output() isProfile = new EventEmitter<boolean>();
    constructor(public auth: AuthService) { }

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