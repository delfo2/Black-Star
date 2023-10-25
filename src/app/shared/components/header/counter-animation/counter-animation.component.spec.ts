import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAnimationComponent } from './counter-animation.component';

describe('CounterAnimationComponent', () => {
  let component: CounterAnimationComponent;
  let fixture: ComponentFixture<CounterAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterAnimationComponent]
    });
    fixture = TestBed.createComponent(CounterAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
