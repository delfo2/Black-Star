import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHeaderComponent } from './cart-header.component';

describe('CartHeaderComponent', () => {
  let component: CartHeaderComponent;
  let fixture: ComponentFixture<CartHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartHeaderComponent]
    });
    fixture = TestBed.createComponent(CartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
