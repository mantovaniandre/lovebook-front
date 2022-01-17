import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/Comentarios';
import { ConnectionApiService } from '../services/connection-api.service';

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
  idComentarioDelete!: any; 

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

  deleteComentarioId(idDoLivro: any){
    this.idComentarioDelete = idDoLivro;
  }

  excluirComentario(){
    this.service.deleteComentarios(this.idComentarioDelete).subscribe( data => {
      window.scroll(0,0);
      this.showModalSuccess = true;

      this.$comentarios = this.service.pegarComentarios();
      this.$comentarios.subscribe( data => {
      this.comentarios = data;
      window.scroll(0,0);

      this.$comentarios = this.service.pegarComentarios();
      this.$comentarios.subscribe( data => {
      this.comentarios = data;
      window.scroll(0,0);
    })
    })
      
    },
   
    error => {
      this.showModalFailure = true;
      window.scroll(0,0);
    }
    )
  }
  
  formatarData(data: any){

    let date = new Date(data);
    return formatDate(date, 'dd/MM/yyyy - hh:mm:ss', "en-US");

  }
}
