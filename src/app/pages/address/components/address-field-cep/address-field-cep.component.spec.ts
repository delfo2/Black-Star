import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFieldComponent } from './address-field-cep.component';

describe('AddressFieldComponent', () => {
  let component: AddressFieldComponent;
  let fixture: ComponentFixture<AddressFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressFieldComponent]
    });
    fixture = TestBed.createComponent(AddressFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
