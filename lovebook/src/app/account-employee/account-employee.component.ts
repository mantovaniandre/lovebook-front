import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-employee',
  templateUrl: './account-employee.component.html',
  styleUrls: ['./account-employee.component.css']
})
export class AccountEmployeeComponent implements OnInit {
  group!: FormGroup;

  saveRange() {
    console.log(this.group.value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
