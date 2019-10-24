import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenasPage } from './buenas.page';

describe('BuenasPage', () => {
  let component: BuenasPage;
  let fixture: ComponentFixture<BuenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuenasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
