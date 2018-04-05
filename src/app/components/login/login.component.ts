import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuariosInfoService } from '../../services/usuarios-info.service';
import { Usuarios } from '../../models/usuarios';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuaActu: Usuarios = new Usuarios();
  isLoginError: boolean;

  constructor(private usuariosServices: UsuariosInfoService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.usuariosServices.authUsua(this.usuaActu.usua, this.usuaActu.pass).subscribe(
      (data: any) => {
        localStorage.setItem('usuaToken', data.access_token);
        localStorage.setItem('usuaLoge', this.usuaActu.usua);
        this.router.navigate(['/principal']);
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      }
    );
  }

}
