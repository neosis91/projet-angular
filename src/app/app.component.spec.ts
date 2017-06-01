import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TvmazeComponent } from './tvmaze/tvmaze.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule} from '@angular/material';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule, HttpModule,  [MdButtonModule, MdToolbarModule, MdInputModule, MdCardModule, MdGridListModule],  ],
      declarations: [
        AppComponent,
          TvmazeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

  it(`should have as title 'app works!'`, async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Movie Search');
  }));
});
