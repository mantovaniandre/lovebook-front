import { Cliente } from './../models/Cliente';
import { Content } from './../models/Content';
import { Observable, Subject, Subscription } from 'rxjs';
import { ConnectionApiService } from './../services/connection-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Livro } from '../models/Livro';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  $nomeUsuario!: Observable<Cliente>;
  nomeUsuario!: string;
  data!: Array<any>;
  $livros!: Observable<Array<Livro>>;
  nomeDoLivro!: string;
  slides: any = [[]];
  subscription!: Subscription;
  sidebar!: SidebarComponent;
  erroString!: string;
  $loadingError = new Subject<boolean>();
  dados: any;

  data_literatura!: Array<any>;
  $livros_literatura!: Observable<Array<Livro>>;
  slides_literatura: any = [[]];
  
  data_aventura!: Array<any>;
  $livros_aventura!: Observable<Array<Livro>>;
  slides_aventura: any = [[]];

  data_romance!: Array<any>;
  $livros_romance!: Observable<Array<Livro>>;
  slides_romance: any = [[]];

  data_autoajuda!: Array<any>;
  $livros_autoajuda!: Observable<Array<Livro>>;
  slides_autoajuda: any = [[]];

  data_religiao!: Array<any>;
  $livros_religiao!: Observable<Array<Livro>>;
  slides_religiao: any = [[]];

  data_geek!: Array<any>;
  $livros_geek!: Observable<Array<Livro>>;
  slides_geek: any = [[]];

  data_biografias!: Array<any>;
  $livros_biografias!: Observable<Array<Livro>>;
  slides_biografias: any = [[]];

  data_policial!: Array<any>;
  $livros_policial!: Observable<Array<Livro>>;
  slides_policial: any = [[]];

  constructor(private service: ConnectionApiService,
              private router: Router,
              private dataService: DataService,
              private cookieService: CookieService) {
    this.data = new Array<any>();
  }

  @ViewChild('sidebar')
  public showBackdrop: boolean = true;
  public type: string = 'Push';
  public width: string ='280px';
  public closeOnDocumentClick: boolean = true;
  public onCreated(args: any) {
    this.sidebar.element.style.visibility = '';
  }

  ngOnInit() {
    event?.preventDefault();
    this.$livros_literatura = this.service.getBooks("","Literatura", "","");
    this.$livros_literatura.subscribe(data => {
      this.data_literatura = data;
      this.slides_literatura = this.chunk(this.data_literatura, 5);
    })

    event?.preventDefault();
    this.$livros_aventura = this.service.getBooks("","Aventura", "","");
    this.$livros_aventura.subscribe(data => {
      this.data_aventura = data;
      this.slides_aventura = this.chunk(this.data_aventura, 5);
    })

    event?.preventDefault();
    this.$livros_romance = this.service.getBooks("","Romance", "","");
    this.$livros_romance.subscribe(data => {
      this.data_romance = data;
      this.slides_romance = this.chunk(this.data_romance, 5);
    })

    event?.preventDefault();
    this.$livros_autoajuda = this.service.getBooks("","Auto Ajuda", "","");
    this.$livros_autoajuda.subscribe(data => {
      this.data_autoajuda = data;
      this.slides_autoajuda = this.chunk(this.data_autoajuda, 5);
    })

    event?.preventDefault();
    this.$livros_religiao = this.service.getBooks("","Religião", "","");
    this.$livros_religiao.subscribe(data => {
      this.data_religiao = data;
      this.slides_religiao = this.chunk(this.data_religiao, 5);
    })

    event?.preventDefault();
    this.$livros_geek = this.service.getBooks("","Geek", "","");
    this.$livros_geek.subscribe(data => {
      this.data_geek = data;
      this.slides_geek = this.chunk(this.data_geek, 5);
    })

    event?.preventDefault();
    this.$livros_biografias = this.service.getBooks("","Biografias", "","");
    this.$livros_biografias.subscribe(data => {
      this.data_biografias = data;
      this.slides_biografias = this.chunk(this.data_biografias, 5);
    })

    event?.preventDefault();
    this.$livros_policial = this.service.getBooks("","Policial", "","");
    this.$livros_policial.subscribe(data => {
      this.data_policial = data;
      this.slides_policial = this.chunk(this.data_policial, 5);
    })

    this.subscription = this.dataService.currentMessage.subscribe(message => this.getLivros(message[0],message[1]))

    this.$nomeUsuario = this.service.identificacaoUsuario();
    this.$nomeUsuario.subscribe(data => {
      this.nomeUsuario = data.nome;
      this.dados = [this.nomeUsuario, data.tipoUsuario.id]
      this.dataService.changeUser(this.dados);
    })
  }


  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  getLivros(busca: string, filtro: string){
    event?.preventDefault();
    if(busca == undefined){
      return;
    }
    if(filtro == "Autor"){
      this.$livros = this.service.getBooks("","", busca, "");
    }
    if(filtro == "Editora"){
      this.$livros = this.service.getBooks("","", "", busca);
    }
    if(filtro == "Livro"){
      this.$livros = this.service.getBooks(busca,"", "", "");
    }
    console.log(this.$livros)
    this.$livros.subscribe(data => {
      this.data = data;
      this.slides = this.chunk(this.data, 5);
    },
    (error: HttpErrorResponse) => {
      console.log(error);

      if(error.status == 404){
        this.erroString = "Pesquisa não encontrada"
        this.$loadingError.next(true)
      } else {
        this.erroString = "Nenhum resultado encontrado, tente verificar a ortografia ou usar termos mais genéricos."
        this.$loadingError.next(true)
      }
    })
  }


  informacaoDoLivro(livro: Livro){
    this.cookieService.remove('livro');
    this.cookieService.putObject('livro', livro);
    this.router.navigate(['/saibaMais']);
  }

  alterarTamanhoDecimal(valor: any){
    return parseFloat(valor).toFixed(2);

  }

  

 


}
