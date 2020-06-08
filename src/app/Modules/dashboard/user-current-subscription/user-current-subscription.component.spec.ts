import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrentSubscriptionComponent } from './user-current-subscription.component';

describe('UserCurrentSubscriptionComponent', () => {
  let component: UserCurrentSubscriptionComponent;
  let fixture: ComponentFixture<UserCurrentSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCurrentSubscriptionComponent]
    })
      .compileComponents();
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
