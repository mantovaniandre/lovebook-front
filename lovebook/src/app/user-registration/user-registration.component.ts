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

  registrar = {
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


  registrarUsuario(nome: string, sobrenome: string, emailUsuario: string, senhaUsuario: string, sexoUsuario: string, cepUsuario: string, cidadeUsuario: string, estadoUsuario: string, enderecoUsuario: string, numeroEnderecoUsuario: string, complementoEnderecoUsuario: string, numeroCartaoCredito: string, nomeCartaoCredito: string, mesExpiracaoCartaoCredito: string, anoExpiracaoCartaoCredito: string, codigoSegurancaCartaoCredito: string, perfil: string ){
    event?.preventDefault();
    this.registrar.nome = nome;
    this.registrar.sobrenome = sobrenome;
    this.registrar.emailUsuario = emailUsuario;
    this.registrar.senhaUsuario = senhaUsuario;
    this.registrar.sexoUsuario = sexoUsuario;
    this.registrar.cepUsuario = cepUsuario;
    this.registrar.cidadeUsuario = cidadeUsuario;
    this.registrar.estadoUsuario = estadoUsuario;
    this.registrar.enderecoUsuario = enderecoUsuario;
    this.registrar.numeroEnderecoUsuario = numeroEnderecoUsuario;
    this.registrar.complementoEnderecoUsuario = complementoEnderecoUsuario;
    this.registrar.numeroCartaoCredito = numeroCartaoCredito;
    this.registrar.nomeCartaoCredito = nomeCartaoCredito;
    this.registrar.mesExpiracaoCartaoCredito = mesExpiracaoCartaoCredito;
    this.registrar.anoExpiracaoCartaoCredito = anoExpiracaoCartaoCredito;
    this.registrar.codigoSegurancaCartaoCredito = codigoSegurancaCartaoCredito;
    this.registrar.perfil = perfil;
    console.log(this.registrar);

    this.connection.postRegistrar(this.registrar).subscribe( data =>  {
      console.log(data);
      this.router.navigate(['/login']);
    })
  }

}
