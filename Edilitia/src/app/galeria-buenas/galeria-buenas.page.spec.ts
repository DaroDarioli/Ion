import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaBuenasPage } from './galeria-buenas.page';

describe('GaleriaBuenasPage', () => {
  let component: GaleriaBuenasPage;
  let fixture: ComponentFixture<GaleriaBuenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaBuenasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaBuenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
