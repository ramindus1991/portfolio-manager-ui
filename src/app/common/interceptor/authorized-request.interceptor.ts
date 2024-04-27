import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class AuthorizedRequestHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenCurrent = localStorage.getItem("data1");
    
    if (!!tokenCurrent) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: tokenCurrent
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
