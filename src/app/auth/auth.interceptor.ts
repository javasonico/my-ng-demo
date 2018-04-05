import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsuariosInfoService } from '../services/usuarios-info.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // tslint:disable-next-line:triple-equals
        if (req.headers.get('No-Auth') == 'True') {
            return next.handle(req.clone());
        }
        if (localStorage.getItem('usuaToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('usuaToken'))
            });
            return next.handle(clonedreq).do(
                succ => {},
                err => {
                    // tslint:disable-next-line:triple-equals
                    if (err.status == 401) {
                        this.router.navigateByUrl('/login');
                    }
                }
            );
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}
