import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { MaterialModule } from '../../../../core/material.module';

import { GeneralUtils } from '../../../shared/utility';

import { ConfirmationService } from '../../../../core/services/confirmation.service';
import { DoctorService, MasterdataService } from '../../../shared/services';
import { BeneficiaryDetailsService } from '../../../../core/services/beneficiary-details.service';

import { BeneficiaryDetailsServiceStub } from '../../../../core/mocks/beneficiary-details-service-stub';
import { MasterdataServiceStub } from '../../../shared/mocks/masterdata-service-stub';
import { DoctorServiceStub } from '../../../shared/mocks/doctor-service-stub';

import * as data from '../../../shared/mocks/mock-data';
import { Observable } from 'rxjs/Rx';

import { MenstrualHistoryComponent } from './menstrual-history.component';

describe('MenstrualHistoryComponent', () => {
  let component: MenstrualHistoryComponent;
  let fixture: ComponentFixture<MenstrualHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenstrualHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenstrualHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
