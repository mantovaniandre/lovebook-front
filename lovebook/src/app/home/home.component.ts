import { Content } from './../models/Content';
import { Observable, Subject, Subscription } from 'rxjs';
import { ConnectionApiService } from './../services/connection-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Livro } from '../models/Livro';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data!: Array<any>;
  data_literatura!: Array<any>;
  $livros!: Observable<Array<Livro>>;
  $livros_literatura!: Observable<Array<Livro>>;
  subscription!: Subscription;
  slides_literatura: any = [[]];
  slides: any = [[]];
  sidebar!: SidebarComponent;
  erroString!: string;
  $loadingError = new Subject<boolean>();

  constructor(private service: ConnectionApiService,
              private router: Router,
              private dataService: DataService,) {
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
    this.$livros_literatura = this.service.getBooks("","Romance", "","");
    this.$livros_literatura.subscribe(data => {
      this.data_literatura = data;
      this.slides_literatura = this.chunk(this.data_literatura, 5);
    })

    this.subscription = this.dataService.currentMessage.subscribe(message => this.getLivros(message[0],message[1]))
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
      this.slides = this.chunk(this.data, 4);
    },
    (error: HttpErrorResponse) => {
      console.log(error);

      if(error.status == 404){
        this.erroString = "Pesquisa não encontrada"
        this.$loadingError.next(true)
      } else {
        this.erroString = "Ocorreu um erro ao realizar a pesquisa"
        this.$loadingError.next(true)
      }
    })
  }

}
