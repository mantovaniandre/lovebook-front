import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { Livro } from '../models/Livro';
import { ConnectionApiService } from '../services/connection-api.service';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent implements OnInit {

  $livros!: Observable<Livro>;
  livro!: any;

  constructor(private connectionApiService: ConnectionApiService, 
              private cookieService: CookieService) { }

  ngOnInit() {
    this.livro = this.cookieService.getObject('livro');
    console.log(this.livro)

  }

 

  



}
