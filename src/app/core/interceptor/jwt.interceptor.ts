import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { catchError } from 'rxjs/operators';

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.getToken();

  const authReq = token ?
    req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    }) : req;

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401 || error.status === 403) {
        tokenService.removeToken();

        router.navigate(['/']);
      }
      return throwError(() => error);
    })
  );
}