import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserService } from './../login/user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  private hasJWT: boolean = false;
  private userInfo: any;

  constructor(private userService: UserService, private router: Router) {
    this.getUserInfo();
    this.hasJWT = this.userInfo;
  }

  private getUserInfo(){
    this.userInfo = this.userService.getToken();
  }

  canActivate() {
    if(!this.hasJWT){
      this.router.navigate(['/login'])
      return false;
    }
    return true;
  }


}
