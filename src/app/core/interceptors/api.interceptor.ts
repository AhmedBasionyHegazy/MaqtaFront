import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!req.url.startsWith('http') || !req.url.startsWith('https')) {
            const baseUrl = environment.baseUrl;
            const apiReq = req.clone({url: `${baseUrl}${req.url}`});
            return next.handle(apiReq);
        } else {
            return next.handle(req);
        }
    }
}
