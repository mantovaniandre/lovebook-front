import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { Livro } from '../models/Livro';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  data: any[];
  $usuario!: Observable<Cliente>;
  usuario!: Cliente;
  data_literatura!: Array<any>;
  $livros_literatura!: Observable<Array<Livro>>;
  slides_literatura: any = [[]];
  showModalSuccess!: boolean;
  showModalFailure!: boolean;

  formulario = {
    "nome": "",
    "sobrenome": "",
    "emailUsuario": "",
    "senhaUsuario": "",
    "sexoUsuario": "",
    "cepUsuario": "",
    "cidadeUsuario": "",
    "estadoUsuario": "",
    "enderecoUsuario": "",
    "numeroEnderecoUsuario": "",
    "complementoEnderecoUsuario": "",
    "numeroCartaoCredito": "",
    "nomeCartaoCredito": "",
    "mesExpiracaoCartaoCredito": "",
    "anoExpiracaoCartaoCredito": "",
    "codigoSegurancaCartaoCredito": "",
    "perfil": ""
  }

  constructor(private service: ConnectionApiService,
              private dataService: DataService,
              private router: Router) {
    this.data = new Array<any>();
  }

  ngOnInit() {
    this.$usuario = this.service.identificacaoUsuario();
    this.$usuario.subscribe(data => {
      console.log(data);

    this.formulario.nome = data.nome;
    this.formulario.sobrenome = data.sobrenome;
    this.formulario.emailUsuario = data.emailUsuario;
    this.formulario.senhaUsuario = data.senhaUsuario;
    this.formulario.sexoUsuario = data.sexoUsuario;
    this.formulario.cepUsuario = data.cepUsuario;
    this.formulario.cidadeUsuario = data.cidadeUsuario;
    this.formulario.estadoUsuario = data.estadoUsuario;
    this.formulario.enderecoUsuario = data.enderecoUsuario;
    this.formulario.numeroEnderecoUsuario = data.numeroEnderecoUsuario;
    this.formulario.complementoEnderecoUsuario = data.complementoEnderecoUsuario;
    this.formulario.numeroCartaoCredito = data.numeroCartaoCredito;
    this.formulario.nomeCartaoCredito = data.nomeCartaoCredito;
    this.formulario.mesExpiracaoCartaoCredito = data.mesExpiracaoCartaoCredito;
    this.formulario.anoExpiracaoCartaoCredito = data.anoExpiracaoCartaoCredito;
    this.formulario.codigoSegurancaCartaoCredito = data.codigoSegurancaCartaoCredito;
    this.formulario.perfil = data.tipoUsuario.nome;

    })

    event?.preventDefault();
    this.$livros_literatura = this.service.getBooks("","Literatura", "","");
    this.$livros_literatura.subscribe(data => {
      this.data_literatura = data;
      this.slides_literatura = this.chunk(this.data_literatura, 5);
    })
  }

  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  atualizarUsuario(){
    console.log(this.formulario)
    this.service.putUsuario(this.formulario).subscribe( data => {
      console.log(this.formulario)
      window.scroll(0,0);
      this.showModalSuccess = true;
    },
   
    error => {
      this.showModalFailure = true;
      window.scroll(0,0);
    }
    )
  }

}
