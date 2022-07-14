import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token
        const authReq = request.clone({
            headers: request.headers
                .set("Authorization", `Bearer ${atob(localStorage.getItem("key-api")??'')}`)
                .set("Content-Type", "application/json")
                .set("Cache-Control", "no-cache")
                .set("Pragma", "no-cache")
        });

        // pass on the cloned request instead of the original request.
        return next.handle(authReq);
    }
}
