import { ConnectionApiService } from './../services/connection-api.service';
import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edition-books',
  templateUrl: './edition-books.component.html',
  styleUrls: ['./edition-books.component.css']
})
export class EditionBooksComponent implements OnInit {
  showModalSuccess!: boolean;
  showModalFailure!: boolean;
  livro!: any;
  
  constructor(private cookieService: CookieService,
              private connectionApiService: ConnectionApiService,
              private data: DataService,) { }

  ngOnInit(): void {
    this.livro = this.cookieService.getObject('livro');
    console.log(this.livro)
  }

}
