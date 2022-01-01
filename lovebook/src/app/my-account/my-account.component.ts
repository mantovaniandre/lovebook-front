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
  usuarioEditado!: any;

  atualizar = {
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
      this.usuario = data;
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

  atualizarUsuario(nome: string, sobrenome: string, email: string, senha: string, cep: string, endereco: string, numero: string, complemento: string, cidade: string, estado: string, perfil: string, sexo: string, numeroCartaoCredito: string, nomeCartaoCredito: string, mesExpiracaoCartaoCredito: string, anoExpiracaoCartaoCredito: string, codigoSegurancaCartaoCredito: string){
    this.service.putUsuario(this.atualizar).subscribe( data => {
      this.usuarioEditado = data;
     
      console.log(this.atualizar)
      console.log(this.usuarioEditado)
      window.scroll(0,0);
      this.showModalSuccess = true;
    },
    this.atualizar.nome = nome;
    this.atualizar.sobrenome = sobrenome;
    this.atualizar.emailUsuario = email;
    this.atualizar.senhaUsuario = senha;
    this.atualizar.sexoUsuario = sexo;
    this.atualizar.cepUsuario = cep;
    this.atualizar.cidadeUsuario = cidade;
    this.atualizar.estadoUsuario = estado;
    this.atualizar.enderecoUsuario = endereco;
    this.atualizar.numeroEnderecoUsuario = numero;
    this.atualizar.complementoEnderecoUsuario = complemento;
    this.atualizar.numeroCartaoCredito = numeroCartaoCredito;
    this.atualizar.nomeCartaoCredito = nomeCartaoCredito;
    this.atualizar.mesExpiracaoCartaoCredito = mesExpiracaoCartaoCredito;
    this.atualizar.anoExpiracaoCartaoCredito = anoExpiracaoCartaoCredito;
    this.atualizar.codigoSegurancaCartaoCredito = codigoSegurancaCartaoCredito;
    this.atualizar.perfil = tipoUsuario
    .nome;

    error => {
      this.showModalFailure = true;
      window.scroll(0,0);
    }
    )
  }

}
