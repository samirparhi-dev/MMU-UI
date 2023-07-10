/* 
* AMRIT – Accessible Medical Records via Integrated Technology 
* Integrated EHR (Electronic Health Records) Solution 
*
* Copyright (C) "Piramal Swasthya Management and Research Institute" 
*
* This file is part of AMRIT.
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see https://www.gnu.org/licenses/.
*/


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Md2Module } from 'md2';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { RegistrarRoutingModule } from './registrar-routing.module';
import { CoreModule } from '../core/core.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';

import { RegisterPersonalDetailsComponent } from './registration/register-personal-details/register-personal-details.component';
import { RegisterDemographicDetailsComponent } from './registration/register-demographic-details/register-demographic-details.component';
import { RegisterOtherDetailsComponent } from './registration/register-other-details/register-other-details.component';

import { RegistrarService } from './shared/services/registrar.service';
import { RegisterEditLocationComponent } from './registration/register-edit-location/register-edit-location.component';

@NgModule({
  imports: [
    CommonModule,
    Md2Module,
    FormsModule,
    CoreModule,
    RegistrarRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  entryComponents: [SearchDialogComponent,RegisterEditLocationComponent],
  providers: [ 
    RegistrarService 
  ],
  declarations: [
    DashboardComponent,
    RegistrationComponent,
    SearchComponent,
    SearchDialogComponent,
    RegisterPersonalDetailsComponent,
    RegisterDemographicDetailsComponent,
    RegisterOtherDetailsComponent,
    RegisterEditLocationComponent
    
  ],
})
export class RegistrarModule { }
