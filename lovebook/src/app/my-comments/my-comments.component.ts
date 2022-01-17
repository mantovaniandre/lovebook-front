import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/Comentarios';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {
  $comentarios!: Observable<any>;
  comentarios!: Comentarios[];
  livro!: any;
  showModalSuccess!: boolean;
  showModalFailure!: boolean; 

  constructor(private service: ConnectionApiService, 
              private router: Router) { }

  ngOnInit(): void {
    this.$comentarios = this.service.pegarComentarios();
    this.$comentarios.subscribe( data => {
      this.comentarios = data;
      window.scroll(0,0);
    })

  }
  

  go(destination: string){
    this.router.navigate(['/' + destination]);
    window.scroll(0,0);
  }

  removerComentario(id: any){
    this.comentarios.forEach((element: any,index: any)=>{
      if(element.id == id) this.comentarios.splice(index,1);
    });

    this.service.deleteComentario();
  }

}
