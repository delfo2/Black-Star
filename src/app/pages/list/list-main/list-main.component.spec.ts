import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainComponent } from './list-main.component';

describe('ListMainComponent', () => {
  let component: ListMainComponent;
  let fixture: ComponentFixture<ListMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMainComponent]
    });
    fixture = TestBed.createComponent(ListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
