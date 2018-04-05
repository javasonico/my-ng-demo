import { Injectable } from '@angular/core';
import { Estados } from '../models/estados';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class EstadosInfoService {
  webApiUrl: string;

  constructor(private http: HttpClient) {
    this.webApiUrl = environment.apiURL;
  }

  getAllEstados() {
    return this.http.get<Estados[]>(this.webApiUrl.concat('/estados'));
  }

}
