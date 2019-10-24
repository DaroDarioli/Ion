import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GelariaMisMalasPage } from './gelaria-mis-malas.page';

describe('GelariaMisMalasPage', () => {
  let component: GelariaMisMalasPage;
  let fixture: ComponentFixture<GelariaMisMalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelariaMisMalasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelariaMisMalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
