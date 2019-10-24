import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogueoPage } from './error-logueo.page';

describe('ErrorLogueoPage', () => {
  let component: ErrorLogueoPage;
  let fixture: ComponentFixture<ErrorLogueoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLogueoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogueoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
