import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/Product.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private service:ProductService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event=>{
        this.service.loader.next(true);
        if(event.type==HttpEventType.Response){
          if(event.status==200){
            this.service.loader.next(false);
          }
        }
      })
    );
  }
}
