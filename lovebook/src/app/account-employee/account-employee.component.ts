import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Livro } from '../models/Livro';
import { ConnectionApiService } from '../services/connection-api.service';

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

data!: Array<any>;
$livros!: Observable<Array<Livro>>;

constructor(private service: ConnectionApiService,
  private router: Router) {
  this.data = new Array<any>();
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

slides: any = [[]];
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

getLivros(livro: string){
  event?.preventDefault();
  this.$livros = this.service.getBooks(livro, "");
  this.$livros.subscribe(data => {
    console.log(data);
    this.data = data;
    this.slides = this.chunk(this.data, 3);
  })
}

}
