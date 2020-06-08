import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DthCardComponent } from './dth-card.component';

describe('DthCardComponent', () => {
  let component: DthCardComponent;
  let fixture: ComponentFixture<DthCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DthCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
