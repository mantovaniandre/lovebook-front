import { Comentarios } from './../models/Comentarios';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable, Subscription } from 'rxjs';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Livro } from '../models/Livro';
import { Cliente } from '../models/Cliente';
import { formatDate } from '@angular/common';


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
    "idDoLivro": "",
    "nota": 0
  }
  $dadosUsuario!: Observable<Cliente>;
  dadosUsuario!: any;
  currentRate = 1;

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

    this.$dadosUsuario = this.connectionApiService.identificacaoUsuario();
    this.$dadosUsuario.subscribe(data => {
      this.dadosUsuario = data.tipoUsuario.id;
    })

    this.livro.nota = this.alterarTamanhoDecimal(this.livro.nota);
  }

  postar(tituloDoComentario: string, comentarioConteudo: string){
    event?.preventDefault();
    this.postComentarios.tituloDoComentario = tituloDoComentario;
    this.postComentarios.comentarioConteudo = comentarioConteudo;
    this.postComentarios.idDoLivro = this.livro.id;
  
    this.connectionApiService.postComentarios(this.postComentarios).subscribe(data =>{
      this.$comentarios = this.connectionApiService.getComentarios(this.livro.id);
      this.$comentarios.subscribe(data => {
      this.comentarios = data;
    
      this.livro = this.cookieService.getObject('livro');
      this.cookieService.remove('livro');
      if(data == 0){
        this.livro.nota = this.postComentarios.nota
      } else {
        this.livro.nota = (this.livro.nota * (this.comentarios.length - 1) + this.postComentarios.nota) / this.comentarios.length
      }
      this.livro.nota = this.alterarTamanhoDecimal(this.livro.nota);
      this.cookieService.putObject('livro', this.livro);
    })
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
      
      let possuiLivro: boolean = false;
      for(let i=0; i < this.listaLivros.length; i++){
        if(this.listaLivros[i].id == livro.id){
          this.listaLivros[i].quantidadeSelecionada += 1;
          possuiLivro = true;
        }
      }

      if(possuiLivro){
        this.cookieService.putObject('carrinho', this.listaLivros);
      } else {
        this.listaLivros.push(livro_front);
        this.cookieService.putObject('carrinho', this.listaLivros);
      }

    }

    this.router.navigate(['/carrinho']);

  }

  formatarData(data: any){
    let date = new Date(data);
    return formatDate(date, 'dd/MM/yyyy - hh:mm:ss', "en-US");
  }

  alterarTamanhoDecimal(valor: any){
    return parseFloat(valor).toFixed(1);

  }


}
