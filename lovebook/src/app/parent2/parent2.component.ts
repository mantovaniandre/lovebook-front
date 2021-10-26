import { Component } from '@angular/core';


@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  constructor() { }

  message: any;

  receiveMessage($event: any) {
    this.message = $event
  }

}
