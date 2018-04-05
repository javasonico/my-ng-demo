import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuarios } from '../models/usuarios';

@Injectable()
export class UsuariosInfoService {
  webApiUrl: string;
  existe: boolean;

  constructor(private http: HttpClient) {
    this.webApiUrl = environment.apiURL;
  }

  getAllUsuarios() {
    return this.http.get<Usuarios[]>(this.webApiUrl.concat('/usuarios'));
  }

  guarUsua(usua: Usuarios) {
    const body = JSON.stringify(usua);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Usuarios>(this.webApiUrl.concat('/usuarios'), body, {headers: header});
  }

  modiUsua(usua: Usuarios) {
    const body = JSON.stringify(usua);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Usuarios>(this.webApiUrl.concat('/usuarios/').concat(usua.id.toString()),
    body, {headers: header});
  }

  elimUsua(usua: Usuarios) {
    const body = JSON.stringify(usua);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.webApiUrl.concat('/usuarios/').concat(usua.id.toString())).subscribe(res => console.log(res));
  }

  valiUsua(usua: Usuarios): boolean {
    this.http.get<Usuarios[]>(this.webApiUrl.concat('/usuarios?usua=').
    concat(usua.usua)).subscribe(
      data => {
        this.existe = data.length > 0;
      }
   );
   return this.existe;
  }

  authUsua(usua, pass) {
    const params = {
      'email': usua,
      'password': pass
    };
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('No-Auth', 'True')
    .set('Cache-Control', 'no-cache');
    return this.http.post<Usuarios>(this.webApiUrl.concat('/auth/login'), params, {headers: header});
  }
}
