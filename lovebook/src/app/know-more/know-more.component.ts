import { Comentarios } from './../models/Comentarios';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable, Subscription } from 'rxjs';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


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


 

  



}
