import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sibling3',
  templateUrl: './sibling3.component.html',
  styleUrls: ['./sibling3.component.css']
})
export class Sibling3Component implements OnInit {

  message:any;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit(){
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}
