import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressResumeComponent } from './address-resume.component';

describe('AddressResumeComponent', () => {
  let component: AddressResumeComponent;
  let fixture: ComponentFixture<AddressResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressResumeComponent]
    });
    fixture = TestBed.createComponent(AddressResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
