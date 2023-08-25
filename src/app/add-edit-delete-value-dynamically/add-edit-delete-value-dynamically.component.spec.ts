import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteValueDynamicallyComponent } from './add-edit-delete-value-dynamically.component';

describe('AddEditDeleteValueDynamicallyComponent', () => {
  let component: AddEditDeleteValueDynamicallyComponent;
  let fixture: ComponentFixture<AddEditDeleteValueDynamicallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDeleteValueDynamicallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteValueDynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
