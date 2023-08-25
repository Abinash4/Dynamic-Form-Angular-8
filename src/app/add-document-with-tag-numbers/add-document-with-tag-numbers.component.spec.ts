import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentWithTagNumbersComponent } from './add-document-with-tag-numbers.component';

describe('AddDocumentWithTagNumbersComponent', () => {
  let component: AddDocumentWithTagNumbersComponent;
  let fixture: ComponentFixture<AddDocumentWithTagNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDocumentWithTagNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocumentWithTagNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
