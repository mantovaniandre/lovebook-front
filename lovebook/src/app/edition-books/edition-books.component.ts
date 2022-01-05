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
  $livro!: any;
  livro!: any;

  formulario = {
    "id": "",
    "nomeDoAutor": "",
    "custo": "",
    "nome": "",
    "editora": "",
    "idioma": "",
    "urlDaImagem": "",
    "quantidade": "",
    "precoDeVenda": "",
    "categoria": "",
    "numeroDePaginas": ""
  }
  
  constructor(private cookieService: CookieService,
              private connectionApiService: ConnectionApiService,
              private data: DataService,) { }

  ngOnInit(): void {
    this.livro = this.cookieService.getObject('livro');

    this.formulario.id = this.livro.id;
    this.formulario.nomeDoAutor = this.livro.nomeDoAutor;
    this.formulario.custo = this.livro.custoDoLivro;
    this.formulario.nome = this.livro.nomeDoLivro;
    this.formulario.editora = this.livro.editoraDoLivro;
    this.formulario.idioma = this.livro.idiomaDoLivro;
    this.formulario.urlDaImagem = this.livro.urlDaImagemDoLivro;
    this.formulario.quantidade = this.livro.quantidadeDeLivros;
    this.formulario.precoDeVenda = this.livro.precoDeVendaDoLivro;
    this.formulario.categoria = this.livro.categoriaDoLivro;
    this.formulario.numeroDePaginas = this.livro.numeroDaPaginaDoLivro;
    
  }

  atualizarLivro(){
    this.connectionApiService.putBook(this.formulario).subscribe( data => {
      console.log(this.formulario)
      window.scroll(0,0);
      this.showModalSuccess = true;
    },
   
    error => {
      console.log(this.formulario)
      this.showModalFailure = true;
      window.scroll(0,0);
    }
    )
  }

}
