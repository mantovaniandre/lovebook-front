import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }


getToken(){
  return localStorage.getItem('token');
}

setToken(token: string){
  localStorage.setItem('token', token)
}

}
