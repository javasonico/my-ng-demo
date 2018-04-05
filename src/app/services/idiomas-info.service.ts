import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Idiomas } from '../models/idiomas';

@Injectable()
export class IdiomasInfoService {
  webApiUrl: string;

  constructor(private http: HttpClient) {
    this.webApiUrl = environment.apiURL;
  }

  getAllIdiomas() {
    return this.http.get<Idiomas[]>(this.webApiUrl.concat('/idiomas'));
  }

}
