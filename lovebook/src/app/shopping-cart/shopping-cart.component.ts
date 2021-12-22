import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { ConnectionApiService } from '../services/connection-api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  data: any[];
  $usuario!: Observable<Cliente>;
  usuario!: Cliente;
  listaLivros!: any;
  filtroSelecionado!: string;
  precoFinal!: any;
  

    constructor(private service: ConnectionApiService, 
                private connectionApiService: ConnectionApiService,
                private router: Router,
                private cookieService: CookieService,
                ) {
    this.data = new Array<any>();
}

  ngOnInit(): void {
    this.$usuario = this.connectionApiService.identificacaoUsuario();
    this.$usuario.subscribe(data => {
      this.usuario = data;
    console.log(this.usuario)
    })
    this.listaLivros = this.cookieService.getObject('carrinho');
  }

  calcular(event: any, item: any){
    for(let i = 0; i<this.listaLivros.length; i++){
      if(this.listaLivros[i].id == item.id){
        this.listaLivros[i].quantidadeSelecionada = event.target.value;
        break;
      }
    }
  }

}
