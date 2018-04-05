import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../models/roles';
import { environment } from '../../environments/environment';

@Injectable()
export class RolesInfoService {
  webApiUrl: string;

  constructor(private http: HttpClient) {
    this.webApiUrl = environment.apiURL;
  }

  getAllRoles() {
    return this.http.get<Roles[]>(this.webApiUrl.concat('/roles'));
  }
}
