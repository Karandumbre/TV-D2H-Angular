import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DthCardComponent } from './dth-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DthCardComponent', () => {
  let component: DthCardComponent;
  let fixture: ComponentFixture<DthCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [DthCardComponent]
    });
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
