 import {Injectable} from '@angular/core';
 import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
 import {Observable} from 'rxjs';
 import {AuthService} from '../../admin/shared/services/auth.service';

 @Injectable()
 export class TokenInterceptor implements HttpInterceptor {

   constructor(public auth: AuthService) {}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     request = request.clone({
       setHeaders: {
         Authorization: `Bearer_${this.auth.token}`
       }
     });
     console.log(`Bearer_${this.auth.token}`);
     return next.handle(request);
   }
 }
