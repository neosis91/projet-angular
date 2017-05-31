import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazeComponent } from './tvmaze.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

describe('TvmazeComponent', () => {
  let component: TvmazeComponent;
  let fixture: ComponentFixture<TvmazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      declarations: [ TvmazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvmazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created TVMazeComponent', () => {
    expect(component).toBeTruthy();
  });
});
