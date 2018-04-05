import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Prime NG
import { MessageModule } from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { DialogModule } from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { PrincipalComponent } from './components/principal/principal.component';

// Services
import { UsuariosInfoService } from './services/usuarios-info.service';
import { RolesInfoService } from './services/roles-info.service';
import { EstadosInfoService } from './services/estados-info.service';
import { IdiomasInfoService } from './services/idiomas-info.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MessageModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DataTableModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule,
    MultiSelectModule,
    DropdownModule
  ],
  providers: [DatePipe, ConfirmationService, UsuariosInfoService, RolesInfoService,
    EstadosInfoService, IdiomasInfoService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
