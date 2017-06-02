import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProfileComponent } from './profile.component';
import {AuthService} from "../auth/auth.service";
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule} from '@angular/material';
import {ProfileService} from "./profile.service";
describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule, RouterTestingModule, MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule ],
            declarations: [ ProfileComponent ],
            providers: [
                AuthService,
                ProfileService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});