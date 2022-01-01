import { CookieService } from 'ngx-cookie';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { Livro } from '../models/Livro';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  subscription!: Subscription;
  message:any;
  filtroSelecionado!: string;
  $livros!: Observable<Array<Livro>>;
  data!: Array<any>;
  slides: any = [[]];
  erroString!: string;
  $loadingError = new Subject<boolean>();
  valorId!: any;

  
  constructor(private dataService: DataService,
              private router: Router,
              private service: ConnectionApiService,
              private cookieService: CookieService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(message => this.message = message)
    window.scroll(0,0);
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
      this.slides = this.chunk(this.data, 4);
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

  selectFiltro(event: any){
    this.filtroSelecionado = event.target.value;
  }

  go(destination: string){
    this.router.navigate(['/' + destination]);
    window.scroll(0,0);
  }

  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  informacaoDoLivro(livro: Livro){
    this.cookieService.remove('livro');
    this.cookieService.putObject('livro', livro);
    this.router.navigate(['/edicaoDeLivros']);
  }

}
