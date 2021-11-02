import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgglyButtonComponent } from './uggly-button.component';

describe('UgglyButtonComponent', () => {
  let component: UgglyButtonComponent;
  let fixture: ComponentFixture<UgglyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgglyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgglyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
