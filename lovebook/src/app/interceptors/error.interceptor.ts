import { UserService } from './../login/user.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private userService: UserService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(
      catchError(error => {
        if(error instanceof HttpErrorResponse){
          if(error.status === 403){
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
            return Observable.throw(error.statusText);
          }else {
            return Observable.throw(error.statusText);
          }
        }else {
          return Observable.throw(error.statusText);
        }
      })
    )
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
