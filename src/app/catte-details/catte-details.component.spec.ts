import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatteDetailsComponent } from './catte-details.component';

describe('CatteDetailsComponent', () => {
  let component: CatteDetailsComponent;
  let fixture: ComponentFixture<CatteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
