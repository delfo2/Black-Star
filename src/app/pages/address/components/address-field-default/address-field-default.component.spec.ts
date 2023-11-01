import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFieldDefaultComponent } from './address-field-default.component';

describe('AddressFieldDefaultComponent', () => {
  let component: AddressFieldDefaultComponent;
  let fixture: ComponentFixture<AddressFieldDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressFieldDefaultComponent]
    });
    fixture = TestBed.createComponent(AddressFieldDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
