import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
import { TokenService } from "../token/token.service";
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService,
        private router: Router,
        private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        this.spinner.show();
        if (this.tokenService.hasToken()) {
            const token = this.tokenService.getToken();
            req = req.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + token
                }
            });
        }
        return next.handle(req)
            .pipe(tap(evt => {
                if (evt instanceof HttpResponse) {
                    console.log('response', evt)
                    if (evt.ok)
                        this.spinner.hide()
                }
            }))
            .pipe(catchError(err => {
                console.log('erro', err.status);
                if (err.status === 403) {
                    this.tokenService.removeToken();
                    this.router.navigate(['login']);
                }
                throw err;
            }));
    }
}