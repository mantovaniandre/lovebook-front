import { Comentarios } from './../models/Comentarios';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable, Subscription } from 'rxjs';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Livro } from '../models/Livro';


@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})

export class KnowMoreComponent implements OnInit {
  $comentarios!: Observable<any>;
  comentarios!: Comentarios[];
  SubscriptionUser!: Subscription;
  messageUser:any;
  idForRouter:any;
  livro!: any;
  listaLivros!: any;
  postComentarios = {
    "tituloDoComentario": "",
    "comentarioConteudo": "",
    "idDoLivro": ""
  }

  constructor(private connectionApiService: ConnectionApiService, 
              private cookieService: CookieService,
              private data: DataService,
              private router: Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.livro = this.cookieService.getObject('livro');
    this.SubscriptionUser = this.data.currentUser.subscribe(messageUser => this.messageUser = messageUser)

    this.$comentarios = this.connectionApiService.getComentarios(this.livro.id);
    this.$comentarios.subscribe(data => {
      this.comentarios = data;
    })
  }

  postar(tituloDoComentario: string, comentarioConteudo: string){
    event?.preventDefault();
    this.postComentarios.tituloDoComentario = tituloDoComentario;
    this.postComentarios.comentarioConteudo = comentarioConteudo;
    this.postComentarios.idDoLivro = this.livro.id;
  
    this.connectionApiService.postComentarios(this.postComentarios).subscribe(data =>{
      console.log(data);
    })
  }

  listaDeLivros(livro: Livro){
    
    this.listaLivros = this.cookieService.getObject('carrinho');

    if(this.listaLivros == null){
      let livro_front = {
        "id": livro.id,
        "nomeDoAutor": livro.nomeDoAutor,
        "nomeDoLivro": livro.nomeDoLivro,
        "urlDaImagemDoLivro": livro.urlDaImagemDoLivro,
        "quantidadeDeLivros": livro.quantidadeDeLivros,
        "precoDeVendaDoLivro": livro.precoDeVendaDoLivro,
        "quantidadeSelecionada": 1
      }

      let lista: Array<any> = [livro_front];
      this.cookieService.putObject('carrinho', lista);
    } else {
      this.cookieService.remove('carrinho');
      
      let livro_front = {
        "id": livro.id,
        "nomeDoAutor": livro.nomeDoAutor,
        "nomeDoLivro": livro.nomeDoLivro,
        "urlDaImagemDoLivro": livro.urlDaImagemDoLivro,
        "quantidadeDeLivros": livro.quantidadeDeLivros,
        "precoDeVendaDoLivro": livro.precoDeVendaDoLivro,
        "quantidadeSelecionada": 1
      } 
      
      this.listaLivros.push(livro_front);
      this.cookieService.putObject('carrinho', this.listaLivros);
    }

    this.router.navigate(['/carrinho']);

  }

}
