import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserAuthService } from "../services/auth/user-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private userAuthService: UserAuthService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }
        const token = this.userAuthService.getToken();

        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError(
                (err:HttpErrorResponse) => {
                    console.log(err.status);
                    if(err.status === 401) {
                        this.router.navigate(['/login']);
                    } else if(err.status === 403) {
                        this.router.navigate(['/forbiden']);
                    }
                    return throwError("Somethnig is wrong!")
                }
            )
        );
    }

    private addToken(request:HttpRequest<any>, token:string) {
        return request.clone(
            {
                setHeaders: {
                    Authorization : `Bearer ${token}`
                }
            }
        );
    }
}