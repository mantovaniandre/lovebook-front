import { Content } from './../models/Content';
import { Comentarios } from './../models/Comentarios';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable, Subscription } from 'rxjs';
import { ConnectionApiService } from '../services/connection-api.service';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { DataService } from '../services/data.service';


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
  livro!: any;

  constructor(private connectionApiService: ConnectionApiService, 
              private cookieService: CookieService,
              private data: DataService) { }

  ngOnInit() {
    this.livro = this.cookieService.getObject('livro');
    console.log("id do livro selecionado: " + this.livro.id)
    this.SubscriptionUser = this.data.currentUser.subscribe(messageUser => this.messageUser = messageUser)


    this.$comentarios = this.connectionApiService.getComentarios(this.livro.id);
    this.$comentarios.subscribe(data => {
      this.comentarios = data;
      console.log(data)
    })

  

    


  }


 

  



}
