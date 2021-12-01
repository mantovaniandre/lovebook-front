import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any[]>([]);
  currentMessage = this.messageSource.asObservable();

  private messageUser = new BehaviorSubject<any>([]);
  currentUser = this.messageUser.asObservable();

  constructor() { }

  changeMessage(message: []) {
    this.messageSource.next(message)
  }

  changeUser(message: string){
    this.messageUser.next(message)
  }

}
