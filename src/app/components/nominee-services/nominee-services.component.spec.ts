/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NomineeServicesComponent } from './nominee-services.component';

describe('NomineeServicesComponent', () => {
  let component: NomineeServicesComponent;
  let fixture: ComponentFixture<NomineeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomineeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomineeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
