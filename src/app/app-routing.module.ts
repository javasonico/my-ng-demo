import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component : LoginComponent, canActivate: [AuthGuard]},
  {path: 'principal', component : PrincipalComponent,
  children: [
    { path: 'usuarios', component: UsuariosListComponent}
  ], canActivate: [AuthGuard]
  },
  {path: 'login', component : LoginComponent},
  {path : '**', component: PageNotFoundComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsuariosListComponent, LoginComponent,
  PageNotFoundComponent, PrincipalComponent];
