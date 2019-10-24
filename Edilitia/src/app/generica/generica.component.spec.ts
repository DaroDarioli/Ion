import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericaComponent } from './generica.component';

describe('GenericaComponent', () => {
  let component: GenericaComponent;
  let fixture: ComponentFixture<GenericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
