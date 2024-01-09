import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosnegComponent } from './posneg.component';

describe('PosnegComponent', () => {
  let component: PosnegComponent;
  let fixture: ComponentFixture<PosnegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosnegComponent]
    });
    fixture = TestBed.createComponent(PosnegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
