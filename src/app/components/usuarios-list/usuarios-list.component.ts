import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuariosInfoService } from '../../services/usuarios-info.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Roles } from '../../models/roles';
import { RolesInfoService } from '../../services/roles-info.service';
import { Idiomas } from '../../models/idiomas';
import { Estados } from '../../models/estados';
import { EstadosInfoService } from '../../services/estados-info.service';
import { IdiomasInfoService } from '../../services/idiomas-info.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {
  listRole: Roles[];
  listUsua: Usuarios[];
  listIdio: Idiomas[];
  listEsta: Estados[];
  objeUsua: Usuarios = new Usuarios();
  mostDial: boolean;
  nuevUsua: boolean;
  constructor(private usuariosService: UsuariosInfoService,
    private rolesService: RolesInfoService,
    private estadosService: EstadosInfoService,
    private idiomasService: IdiomasInfoService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getAllUsuarios();
    this.getAllRoles();
    this.getAllEstados();
    this.getAllIdiomas();
  }

  onRowSelect(event) {
    this.nuevUsua = false;
    this.objeUsua = event.data;
    this.mostDial = true;
  }

  mostNuevUsua() {
    this.nuevUsua = true;
    this.objeUsua = new Usuarios();
    this.mostDial = true;
  }

  saliGuarUsua() {
    this.nuevUsua = false;
    this.objeUsua = new Usuarios();
    this.mostDial = false;
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
       return;
    }
  }

  guarUsua() {
    this.objeUsua.fech_crea = new Date();
    this.objeUsua.pass = this.objeUsua.usua;
    this.usuariosService.guarUsua(this.objeUsua).subscribe(
      data => {
        this.objeUsua = data;
        this.listUsua.push(this.objeUsua);
        this.nuevUsua = false;
      }
    );
  }

  getAllUsuarios() {
    this.usuariosService.getAllUsuarios().subscribe(
      data => {
        this.listUsua = data;
      }
    );
  }

  getAllRoles() {
    this.rolesService.getAllRoles().subscribe(
      data => {
        this.listRole = data;
      }
    );
  }

  getAllEstados() {
    this.estadosService.getAllEstados().subscribe(
      data => {
        this.listEsta = data;
      }
    );
  }

  getAllIdiomas() {
    this.idiomasService.getAllIdiomas().subscribe(
      data => {
        this.listIdio = data;
      }
    );
  }

  editUsua() {
    this.objeUsua.fech_modi = new Date();
    this.objeUsua.usua_modi = localStorage.getItem('usuaLoge');
    this.usuariosService.modiUsua(this.objeUsua).subscribe(
      data => {
        this.objeUsua = data;
        const index = this.listUsua.findIndex(d => d.id === this.objeUsua.id);
        this.listUsua[index] = this.objeUsua;
      }
    );
  }

  confirm() {
    console.log(this.usuariosService.valiUsua(this.objeUsua));
    this.confirmationService.confirm({
        message: '¿Está seguro que desea eliminar?',
        accept: (data) => {
          this.usuariosService.elimUsua(this.objeUsua);
          const index = this.listUsua.findIndex(d => d.id === this.objeUsua.id);
          this.listUsua.splice(index, 1);
          this.objeUsua = new Usuarios();
          this.mostDial = false;
        }
    });
}

}
