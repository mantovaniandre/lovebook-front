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
  valorTotal = 0;
  $compra!: Observable<any>
  compra!: any;
  showModalSuccess!: boolean;
  showModalFailure!: boolean;
  

    constructor(private connectionApiService: ConnectionApiService,
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
    
    this.popularValorTotal()
  }

  calcular(event: any, item: any){
    let soma = 0;
    for(let i = 0; i<this.listaLivros.length; i++){
      if(this.listaLivros[i].id == item.id){
        this.listaLivros[i].quantidadeSelecionada = event.target.value;
      }
      soma += this.listaLivros[i].precoDeVendaDoLivro * this.listaLivros[i].quantidadeSelecionada;
    }
    this.valorTotal = soma;
  }

  popularValorTotal(){
    let soma = 0;
    for(let i = 0; i<this.listaLivros.length; i++){
      soma += this.listaLivros[i].precoDeVendaDoLivro * this.listaLivros[i].quantidadeSelecionada;
    }
    this.valorTotal = soma;
  }

  remover(id: any){
    this.listaLivros.forEach((element: any,index: any)=>{
      if(element.id == id) this.listaLivros.splice(index,1);
    });

    this.cookieService.remove('carrinho');
    this.cookieService.putObject('carrinho', this.listaLivros);

    this.popularValorTotal()

  }


  comprar(event: any){
    let listaLivrosId = [];
    for(let i = 0; i < this.listaLivros.length; i++){
      if(this.listaLivros[i].quantidadeSelecionada > 1){
        for(let j = 0; j < this.listaLivros[i].quantidadeSelecionada; j++){
          listaLivrosId.push(this.listaLivros[i].id)
        }
      } else {
        listaLivrosId.push(this.listaLivros[i].id)
      }
    }
    let listaDeLivrosId = {
      "listaIds": listaLivrosId
    }

    this.$compra = this.connectionApiService.postPurchase(listaDeLivrosId);
    this.$compra.subscribe( data => {
      this.cookieService.remove('carrinho')
      this.listaLivros = [];
      this.showModalSuccess = true;
      
      window.scroll(0,0);

    }, 
    error => {
      this.showModalFailure = true;
      window.scroll(0,0);
    }
    )


  }


}
