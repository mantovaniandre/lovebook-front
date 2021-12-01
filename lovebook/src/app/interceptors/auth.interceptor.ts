import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { UserService } from "../login/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(req, next));
  }

  async handleAccess(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>>{
    let token = this.userService.getToken();

    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    });

      return next.handle(req).toPromise();
  }

}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};


