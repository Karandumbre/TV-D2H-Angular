import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Common/Components/header/header.component';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule
      ],
      declarations: [
        AppComponent, HeaderComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));



  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Initial data load', () => {
    component.FetchUserData();
  });

  it(`should have as title 'TvD2HAssignment'`, () => {
    expect(component.title).toEqual('TvD2HAssignment');
  });
});
