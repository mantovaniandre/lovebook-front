import { Content } from './../models/Content';
import { Observable } from 'rxjs';
import { ConnectionApiService } from './../services/connection-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Livro } from '../models/Livro';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';

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

  constructor(private service: ConnectionApiService,
              private router: Router) {
    this.data = new Array<any>();
   }

  @ViewChild('sidebar')
  sidebar!: SidebarComponent;
  public showBackdrop: boolean = true;
  public type: string = 'Push';
  public width: string ='280px';
  public closeOnDocumentClick: boolean = true;
  public onCreated(args: any) {
    this.sidebar.element.style.visibility = '';

  }
  closeClick(): void {
    this.sidebar.hide();
  };

  toggleClick():void{
    this.sidebar.show();
  }

  ngOnInit() {
    event?.preventDefault();
    this.$livros_literatura = this.service.getBooks("","Romance");
    this.$livros_literatura.subscribe(data => {
      console.log(data);
      this.data_literatura = data;
      this.slides_literatura = this.chunk(this.data_literatura, 5);
      console.log(this.slides_literatura);
    })
  }

  slides_literatura: any = [[]];

  slides: any = [[]];
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  counter(categoria: string){
    if(categoria == "Literatura"){
      return new Array(this.slides_literatura.length);
    }
    return new Array(this.slides.length);

  }

  getLivros(livro: string){
    event?.preventDefault();
    this.$livros = this.service.getBooks(livro, "");
    this.$livros.subscribe(data => {
      console.log(data);
      this.data = data;
      this.slides = this.chunk(this.data, 4);
    })
  }


}
