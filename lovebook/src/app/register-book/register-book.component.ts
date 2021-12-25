import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {
  showModalSuccess!: boolean;
  showModalFailure!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
