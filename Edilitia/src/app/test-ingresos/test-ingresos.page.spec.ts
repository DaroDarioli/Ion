import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIngresosPage } from './test-ingresos.page';

describe('TestIngresosPage', () => {
  let component: TestIngresosPage;
  let fixture: ComponentFixture<TestIngresosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIngresosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
