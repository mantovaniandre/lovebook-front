import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionApiService } from '../services/connection-api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
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

  constructor(private connection: ConnectionApiService,
              private router: Router) { }

  ngOnInit(): void {
    window.scroll(0,0);

  }


  registrarUsuario(){
    event?.preventDefault();
    this.connection.postRegistrar(this.formulario).subscribe( data =>  {
      this.showModalSuccess = true;
      this.reset();
    },
    error => {
      this.showModalFailure = true;
      window.scroll(0,0);
    }
    
    )
  }

  reset(){
    this.formulario.nome = '';
    this.formulario.sobrenome = '';
    this.formulario.emailUsuario = '';
    this.formulario.senhaUsuario = '';
    this.formulario.cepUsuario = '';
    this.formulario.cidadeUsuario = '';
    this.formulario.estadoUsuario = '';
    this.formulario.enderecoUsuario = '';
    this.formulario.numeroEnderecoUsuario = '';
    this.formulario.complementoEnderecoUsuario = '';
    this.formulario.numeroCartaoCredito = '';
    this.formulario.nomeCartaoCredito = '';
    this.formulario.mesExpiracaoCartaoCredito = '';
    this.formulario.anoExpiracaoCartaoCredito = '';
    this.formulario.codigoSegurancaCartaoCredito = '';
    this.formulario.perfil = '';
  }

}
