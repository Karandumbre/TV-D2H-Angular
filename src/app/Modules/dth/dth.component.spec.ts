import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTHComponent } from './dth.component';
import { DthCardComponent } from './../../Common/Components/dth-card/dth-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DTHComponent', () => {
  let component: DTHComponent;
  let fixture: ComponentFixture<DTHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DTHComponent, DthCardComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
