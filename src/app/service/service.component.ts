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


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetLanguageComponent } from 'app/app-modules/core/components/set-language.component';
import { HttpServiceService } from 'app/app-modules/core/services/http-service.service';
import { ConfirmationService } from '../app-modules/core/services/confirmation.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  servicesList: any;
  serviceIDs: any;
  fullName: any;
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor(
    private httpServiceService: HttpServiceService,
    private router: Router,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.fetchLanguageResponse();
    this.servicesList = JSON.parse(localStorage.getItem('services'));
    this.fullName = localStorage.getItem('fullName');
  }

  loginDataResponse: any;
  selectService(service) {
    localStorage.setItem('providerServiceID', service.providerServiceID);
    localStorage.setItem('serviceName', service.serviceName);
    localStorage.setItem('serviceID', service.serviceID);
    sessionStorage.setItem('apimanClientKey', service.apimanClientKey);
    this.loginDataResponse = JSON.parse(localStorage.getItem('loginDataResponse'));
    this.checkRoleAndDesingnationMappedForservice(this.loginDataResponse, service);
  }

  checkRoleAndDesingnationMappedForservice(loginDataResponse, service) {
    let serviceData: any;

    if (loginDataResponse && loginDataResponse.previlegeObj != null && loginDataResponse.previlegeObj != undefined) {
      serviceData = loginDataResponse.previlegeObj.filter((item) => {
        return item.serviceName == service.serviceName
      })[0];

      if (serviceData != null) {
        this.checkMappedRoleForService(serviceData)
      }
    }
  }

  roleArray = []
  checkMappedRoleForService(serviceData) {
    this.roleArray = [];
    let roleData;
    if (serviceData.roles) {
      roleData = serviceData.roles;
      if (roleData.length > 0) {
        roleData.forEach((role) => {
          role.serviceRoleScreenMappings.forEach((serviceRole) => {
            this.roleArray.push(serviceRole.screen.screenName)
          });
        });
        if (this.roleArray && this.roleArray.length > 0) {
          localStorage.setItem('role', JSON.stringify(this.roleArray));
          this.checkMappedDesignation(this.loginDataResponse);
        } else {
          this.confirmationService.alert(this.currentLanguageSet.alerts.info.mapRoleFeature, 'error');
        }
      } else {
        this.confirmationService.alert(this.currentLanguageSet.alerts.info.mapRoleFeature, 'error');
      }
    } else {
      this.confirmationService.alert(this.currentLanguageSet.alerts.info.mapRoleFeature, 'error');
    }
  }

  designation: any;
  checkMappedDesignation(loginDataResponse) {
    if (loginDataResponse.designation && loginDataResponse.designation.designationName) {
      this.designation = loginDataResponse.designation.designationName;
      if (this.designation != null) {
        this.checkDesignationWithRole();
      } else {
        this.confirmationService.alert(this.currentLanguageSet.alerts.info.mapDesignation, 'error');
      }
    } else {
      this.confirmationService.alert(this.currentLanguageSet.alerts.info.mapDesignation, 'error');
    }
  }

  checkDesignationWithRole() {
    if (this.roleArray.includes(this.designation)) {
      localStorage.setItem('designation', this.designation);
      this.routeToDesignation(this.designation);
    } else {
      this.confirmationService.alert(this.currentLanguageSet.alerts.info.mapDesignation, 'error');
    }
  }

  routeToDesignation(designation) {
    this.router.navigate(["/servicePoint"]);
  }

  //AN40085822 13/10/2021 Integrating Multilingual Functionality --Start--
  ngDoCheck(){
    this.fetchLanguageResponse();
  }

  fetchLanguageResponse() {
    this.languageComponent = new SetLanguageComponent(this.httpServiceService);
    this.languageComponent.setLanguage();
    this.currentLanguageSet = this.languageComponent.currentLanguageObject; 
  }
  //--End--
}
