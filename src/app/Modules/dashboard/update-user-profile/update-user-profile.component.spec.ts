import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserProfileComponent } from './update-user-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UpdateUserProfileComponent', () => {
  let component: UpdateUserProfileComponent;
  let fixture: ComponentFixture<UpdateUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule
      ],
      declarations: [UpdateUserProfileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
