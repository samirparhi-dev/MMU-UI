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


import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { environment } from 'environments/environment';

@Injectable()
export class DataSyncService {

  constructor(private http: Http) { }

  getDataSYNCGroup() {
    return this.http.get(environment.getDataSYNCGroupUrl)
      .map((res: Response) => res.json());
  }

  dataSyncLogin(userName: string, password: string, doLogout : any) {
    return this.http.post(environment.syncLoginUrl, { userName, password, doLogout})
      .map(res => res.json());
  }

  userlogoutPreviousSession(userName: string) {
    console.log("environment.userlogoutPreviousSessionUrl", environment.userlogoutPreviousSessionUrl)
    return this.http.post(environment.userlogoutPreviousSessionUrl, { userName: userName })
    .map(res => res.json());
  }

  syncUploadData(groupID) {
    let req = {
      groupID: groupID,
      user: localStorage.getItem('userName'),
      vanID: JSON.parse(localStorage.getItem('serviceLineDetails')).vanID
    }
    console.log(req, 'reqobj');

    return this.http.post(environment.syncDataUploadUrl, req)
      .map(res => res.json());
  }

  syncDownloadData(reqObj) {
    return this.http.post(environment.syncDataDownloadUrl, reqObj)
      .map(res => res.json());
  }

  syncDownloadDataProgress() {
    return this.http.get(environment.syncDownloadProgressUrl)
      .map(res => res.json());
  }

  getVanDetailsForMasterDownload() {
    return this.http.get(environment.getVanDetailsForMasterDownloadUrl)
      .map(res => res.json());
  }
  checkBenIDAvailability() {
    return this.http.get(environment.getBenIDs)
    .map(res => res.json());
  }
  generateBenIDs(reqObj) {
    return this.http.post(environment.generateBenID, reqObj)
    .map(res => res.json());
  }
  inventorySyncDownloadData(vanID) {
    return this.http.post(environment.getInventorySyncData, vanID)
    .map(res => res.json());

  }
}
