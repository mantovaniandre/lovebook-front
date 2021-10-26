import { Content } from './../models/Content';
import { Observable } from 'rxjs';
import { ConnectionApiService } from './../services/connection-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-livro',
  templateUrl: './get-livro.component.html',
  styleUrls: ['./get-livro.component.css']
})
export class GetLivroComponent implements OnInit {

  data!: Array<any>;

  $livros!: Observable<Content>;

  constructor(private service: ConnectionApiService) { }

  ngOnInit(){

  }

  getLivros(livro: string){
    this.$livros = this.service.getBooks(livro);
    this.$livros.subscribe(data => {
      console.log(data);
      this.data = data.content;
    })
  }

}
