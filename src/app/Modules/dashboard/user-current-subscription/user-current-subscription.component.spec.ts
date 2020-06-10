import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrentSubscriptionComponent } from './user-current-subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DthCardComponent } from './../../../Common/Components/dth-card/dth-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserCurrentSubscriptionComponent', () => {
  let component: UserCurrentSubscriptionComponent;
  let fixture: ComponentFixture<UserCurrentSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [UserCurrentSubscriptionComponent, DthCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurrentSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
