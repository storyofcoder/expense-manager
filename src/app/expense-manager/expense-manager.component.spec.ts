import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseManagerComponent } from './expense-manager.component';

describe('ExpenseManagerComponent', () => {
  let component: ExpenseManagerComponent;
  let fixture: ComponentFixture<ExpenseManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
