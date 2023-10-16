import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCollectionComponent } from './default-collection.component';

describe('DefaultCollectionComponent', () => {
  let component: DefaultCollectionComponent;
  let fixture: ComponentFixture<DefaultCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultCollectionComponent]
    });
    fixture = TestBed.createComponent(DefaultCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
