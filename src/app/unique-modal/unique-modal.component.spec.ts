import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueModalComponent } from './unique-modal.component';

describe('UniqueModalComponent', () => {
  let component: UniqueModalComponent;
  let fixture: ComponentFixture<UniqueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
