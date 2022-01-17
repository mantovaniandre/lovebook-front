import { Component, OnInit } from '@angular/core';
import { ConnectionApiService } from '../services/connection-api.service';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {
  showModalSuccess!: boolean;
  showModalFailure!: boolean;

  formulario = {
    "nome": "",
    "editora": "",
    "idioma": "",
    "nomeDoAutor": "",
    "precoDeVenda": "",
    "urlDaImagem": "",
    "quantidade": "",
    "numeroDePaginas": "",
    "categoria": "",
    "custo": ""
  }
  
  constructor(private connectionApiService: ConnectionApiService) { }

  ngOnInit(): void {
  }

  cadastrarLivro(){
    this.connectionApiService.postBook(this.formulario).subscribe( data => {
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
