import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalasPage } from './malas.page';

describe('MalasPage', () => {
  let component: MalasPage;
  let fixture: ComponentFixture<MalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
